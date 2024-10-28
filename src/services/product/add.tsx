import { IProductResponse } from "@/common/models/product/IProductResponse";
import { fbStorage } from "@/config/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { z } from "zod";

const ProductFormSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number().min(0),
  stock: z.number().min(0),
  sku: z.string(),
});

export const addProduct = async (
  formData: FormData,
  imageList: FileList | null
): Promise<IProductResponse> => {
  try {
    const validatedFields = ProductFormSchema.safeParse({
      name: formData.get("name"),
      description: formData.get("description"),
      price: Number(formData.get("price")),
      stock: Number(formData.get("stock")),
      sku: formData.get("sku"),
    });

    if (!validatedFields.success) {
      throw new Error("Invalid form data");
    }

    const response = await fetch("/api/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedFields.data),
    });

    if (!response.ok) {
      throw new Error("Failed to add product");
    }

    const res: IProductResponse = await response.json();

    if (!res.data) {
      throw new Error("Failed to add product");
    }

    const productId = res.data.id;

    if (imageList && imageList.length > 0) {
      const uploadPromises = Array.from(imageList).map(async (file) => {
        const storageRef = ref(fbStorage, `products/${productId}/${file.name}`);
        const uploadTask = await uploadBytesResumable(storageRef, file);
        return await getDownloadURL(uploadTask.ref);
      });

      const uploadedUrls = await Promise.all(uploadPromises);

      await fetch("/api/products/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...res.data,
          images: uploadedUrls,
        }),
      });
    }

    return res;
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      message: "Failed to add product",
      data: null,
    };
  }
};

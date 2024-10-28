"use client";

import { addProduct } from "@/services/product/add";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProductAddForm() {
  const [fileList, setFileList] = useState<FileList | null>(null);

  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (data: FormData) => addProduct(data, fileList),
  });

  const handleSubmit = (formData: FormData) => {
    mutation.mutateAsync(formData, {
      onSuccess: (response) => {
        console.log("Product added", response);
        router.push("/dashboard/products");
      },
      onError: (error) => {
        console.error("Error adding product", error);
      },
    });
  };

  const handleFileUploadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (!files) {
      return;
    }

    setFileList(files);
  };

  return (
    <form action={handleSubmit}>
      <div className="flex flex-col mx-auto w-full gap-4">
        <Input
          type="text"
          name="name"
          label="Name"
          isRequired
          classNames={{
            inputWrapper: "focus-within:ring-1 focus-within:ring-primary-200",
          }}
        />
        <Textarea
          label="Description"
          name="description"
          isRequired
          classNames={{
            inputWrapper: "focus-within:ring-1 focus-within:ring-primary-200",
          }}
        />
        <Input
          type="number"
          label="Price"
          name="price"
          isRequired
          min={0}
          step={0.01}
          classNames={{
            inputWrapper: "focus-within:ring-1 focus-within:ring-primary-200",
          }}
        />
        <Input
          type="number"
          label="Stock"
          name="stock"
          isRequired
          min={0}
          classNames={{
            inputWrapper: "focus-within:ring-1 focus-within:ring-primary-200",
          }}
        />
        <Input
          type="text"
          label="Sku"
          name="sku"
          isRequired
          classNames={{
            inputWrapper: "focus-within:ring-1 focus-within:ring-primary-200",
          }}
        />

        <Input
          type="file"
          label="Images"
          variant="faded"
          classNames={{
            inputWrapper: "focus-within:ring-1 focus-within:ring-primary-200",
          }}
          multiple
          accept=".png,.jpg,.jpeg,.webp"
          onChange={handleFileUploadChange}
        />

        <Button
          type="submit"
          color="primary"
          className="w-full"
          size="lg"
          isLoading={mutation.isPending}
        >
          Confirm
        </Button>
      </div>
    </form>
  );
}

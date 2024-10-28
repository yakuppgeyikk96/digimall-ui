import { IGetProductRequest } from "@/common/models/product/IGetProductRequest";
import { IGetProductResponse } from "@/common/models/product/IGetProductResponse";
import { prisma } from "@/lib/client";

export const getProducts = async (
  request: IGetProductRequest
): Promise<IGetProductResponse> => {
  const text = request.text || "";
  const page = request.page;
  const pageSize = request.pageSize;

  const skip = page && pageSize ? (page - 1) * pageSize : undefined;
  const take = pageSize || undefined;

  try {
    const products = await prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: text,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: text,
              mode: "insensitive",
            },
          },
          {
            sku: {
              contains: text,
              mode: "insensitive",
            },
          },
        ],
      },
      skip,
      take,
    });

    const productsCount = await prisma.product.count({
      where: {
        OR: [
          {
            name: {
              contains: text,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: text,
              mode: "insensitive",
            },
          },
          {
            sku: {
              contains: text,
              mode: "insensitive",
            },
          },
        ],
      },
    });

    return {
      status: 200,
      message: "Products fetched successfully",
      data: products,
      pagination:
        page && pageSize
          ? {
              page,
              pageSize,
              total: productsCount,
            }
          : undefined,
    };
  } catch (error) {
    console.error("Error fetching products:", error);

    return {
      status: 500,
      message: "Failed to fetch products",
      data: null,
    };
  }
};

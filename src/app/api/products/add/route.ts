import { IProductResponse } from "@/common/models/product/IProductResponse";
import { prisma } from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest
): Promise<NextResponse<IProductResponse>> {
  try {
    const data = await req.json();

    const product = await prisma.product.create({
      data,
    });

    if (!product) {
      throw new Error("Failed to add product");
    }

    const responseData: IProductResponse = {
      message: "Product added successfully",
      data: product,
      status: 201,
    };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Failed to add product",
      data: null,
    });
  }
}

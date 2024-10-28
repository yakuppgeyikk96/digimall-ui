import { prisma } from "@/lib/client";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const data = await req.json();

    const productId = data.id;

    if (!productId) {
      return NextResponse.json({
        status: 400,
        message: "Product ID is required",
        data: null,
      });
    }

    delete data.id;

    const updatedProduct = await prisma.product.update({
      where: { id: productId },
      data,
    });

    return NextResponse.json({
      status: 200,
      message: "Product updated successfully",
      data: updatedProduct,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({
      status: 500,
      message: "Failed to add product",
      data: null,
    });
  }
}

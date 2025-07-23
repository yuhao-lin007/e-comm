"use server";
import { revalidatePath } from "next/cache";
import { LATEST_PRODUCT_LIMIT, PAGE_SIZE } from "../constants";
import { convert, formatError } from "../utils";
import { prisma } from "@/db/prisma";

//get display product
export async function getLatestProduct() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: { createdAt: "desc" },
  });
  return convert(data);
}

//display one product

export async function getProductBySlug(slug: string) {
return await prisma.product.findFirst({
  where:{slug: slug}
})

}


export async function getAllProducts({
  query,
  limit = PAGE_SIZE,
  page,
  category,
}: {
  query: string;
  limit?: number;
  page: number;
  category: string;
}) {
 const data = await prisma.product.findMany({
  skip:(page-1)*limit,
  take: limit
 })

 const dataCount = await prisma.product.count()

 return{
  data, totalPages:Math.ceil(dataCount/limit)
 }
}

export async function deleteProduct(id: string) {
  try {
    const productExists = await prisma.product.findFirst({
      where: { id },
    });

    if (!productExists) throw new Error("Product not found");

    await prisma.product.delete({ where: { id } });

    revalidatePath("/admin/products");

    return {
      success: true,
      message: "Product deleted successfully",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
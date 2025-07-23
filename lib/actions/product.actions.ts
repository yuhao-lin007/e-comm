"use server";
import { revalidatePath } from "next/cache";
import { LATEST_PRODUCT_LIMIT, PAGE_SIZE } from "../constants";
import { convert, formatError } from "../utils";
import { prisma } from "@/db/prisma";
import { insertProductSchema, updateProductSchema } from "../validators";
import z from "zod";

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  query,
  limit = PAGE_SIZE,
  page,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  category,
}: {
  query: string;
  limit?: number;
  page: number;
  category: string;
}) {
 const data = await prisma.product.findMany({
  orderBy:{createdAt: "desc"},
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

export async function createProduct(data: z.infer<typeof insertProductSchema>) {
  try {
    const product = insertProductSchema.parse(data);
    await prisma.product.create({ data: product });

    revalidatePath("/admin/products");

    return {
      success: true,
      message: "Product created successfully",
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}

export async function updateProduct(data: z.infer<typeof updateProductSchema>) {
  try {
    const product = updateProductSchema.parse(data);
    const productExists = await prisma.product.findFirst({
      where: { id: product.id },
    });

    if (!productExists) throw new Error('Product not found');

    // Update product
    await prisma.product.update({ where: { id: product.id }, data: product });

    revalidatePath('/admin/products');

    return {
      success: true,
      message: 'Product updated successfully',
    };
  } catch (error) {
    return { success: false, message: formatError(error) };
  }
}
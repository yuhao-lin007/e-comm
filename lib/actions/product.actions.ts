"use server";
import { LATEST_PRODUCT_LIMIT } from "../constants";
import { convert } from "../utils";
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
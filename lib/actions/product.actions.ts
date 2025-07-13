'use server';
import { LATEST_PRODUCT_LIMIT } from "../constants";
import { PrismaClient } from "../generated/prisma";
import { convert } from "../utils";

export async function getLatestProduct() {
    const prisma = new PrismaClient();

    const data = await prisma.product.findMany(
       { take: LATEST_PRODUCT_LIMIT, 
        orderBy:{createdAt:'desc'},}
    );
    return convert(data);
}
import z from "zod";
import { formatNumberWithDecimal } from "./utils";

const currency= z.string().refine((value) => /^\d+(\.\d{2})?$/.test(formatNumberWithDecimal(Number(value))),'price must end with two decimal');
export const insertProductSchema = z.object({
  name: z.string().min(3, "Name must be at 3 charater"),
  slug: z.string().min(3, "Slug must be at 3 charater"),
  category: z.string().min(3, "Category must be at 3 charater"),
  brand: z.string().min(3, "Brand must be at 3 charater"),
  description: z.string().min(3, "Description must be at 3 charater"),
  stock: z.coerce.number(),
  images: z.array(z.string()).min(1,'product must have atleast image'),
  isFeatured: z.boolean(),
  banner: z.string().nullable(),
  price: currency,
});

export const signInFormSchema= z.object({
  email: z.string().email('Invaid email address'),
  password: z.string().min(6,'Password must be atleast 6 charaters')
})
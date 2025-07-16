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

export const signUpFormSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .max(20, { message: "Password must be at most 20 characters" })
      .refine((password) => /[A-Z]/.test(password), {
        message: "Password must contain at least one uppercase letter",
      })
      .refine((password) => /[a-z]/.test(password), {
        message: "Password must contain at least one lowercase letter",
      })
      .refine((password) => /[0-9]/.test(password), {
        message: "Password must contain at least one number",
      })
      .refine((password) => /[!@#$%^&*]/.test(password), {
        message: "Password must contain at least one special character",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export const cartItemSchema = z.object({
  productId: z.string().min(1, "Product is required"),
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
  qty: z.number().int().nonnegative("Quantity must be a non-negative number"),
  image: z.string().min(1, "Image is required"),
  price: currency,
});

export const insertCartSchema = z.object({
    items: z.array(cartItemSchema),
    itemsPrice: currency,
    totalPrice: currency,
    shippingPrice: currency,
    taxPrice: currency,
    sessionCartId: z.string().min(1, "Session cart id is required"),
    userId: z.string().optional().nullable(),
  });
  
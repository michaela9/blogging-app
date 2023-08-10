import { z } from "zod";

export const userSchema = z.object({
  username: z.string().min(1, { message: "Username is required" }),
  password: z
    .string()
    .min(3, { message: "Your password should have at least 3 characters" }),
});

export type UserSchemaT = z.infer<typeof userSchema>;

export const createArticleSchema = z.object({
  title: z.string(),
  perex: z.string(),
  content: z.string().min(1, { message: "Content is required" }),
  image: z
    .string()
    .min(1, { message: "Content is required" })
    .refine((filename) => /\.(jpg|jpeg|png)$/i.test(filename), {
      message: "Invalid file format. Only JPEG and PNG are allowed.",
    }),
});

export type CreateArticleSchemaT = z.infer<typeof createArticleSchema>;

export const createUserSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  password: z
    .string()
    .min(3, { message: "Minimum length of password id 3 letters" }),
});

export type CreateUserSchemaT = z.infer<typeof createUserSchema>;

export const editArticleSchema = z.object({
  title: z.string(),
  perex: z.string(),
  content: z.string().min(1, { message: "Username is required" }),
  image: z.string(),
});

export type EditArticleSchemaT = z.infer<typeof editArticleSchema>;

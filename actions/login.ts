"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";

export const LoginAction = async (values: z.infer<typeof LoginSchema>) => {
  // console.log("POST", values);
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }

  return {
    success: "Logged in",
  };
};

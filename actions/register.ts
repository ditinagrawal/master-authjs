"use server";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";

export const RegisterAction = async (
  values: z.infer<typeof RegisterSchema>
) => {
  // console.log("POST", values);
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid fields",
    };
  }

  return {
    success: "Registered",
  };
};

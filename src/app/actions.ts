"use server";

import * as z from "zod";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

type FormData = z.infer<typeof formSchema>;

export async function submitContactForm(data: FormData) {
  const validation = formSchema.safeParse(data);

  if (!validation.success) {
    return { success: false, error: "Invalid form data." };
  }

  // In a real-world application, you would process the data here.
  // For example, send an email, save to a database, etc.
  console.log("Received contact form submission:");
  console.log(validation.data);

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Always return success for this demonstration
  return { success: true };
}

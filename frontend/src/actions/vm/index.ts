"use server"

import z from "zod"

import { env } from "@/env"
import type { CreateVMRequestSchema } from "@/validators"

export async function createVM(values: z.infer<typeof CreateVMRequestSchema>) {
  const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/vms/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  })
  const data = await res.json()

  if (!res.ok) {
    throw new Error("Failed to create VM", {
      cause: data.error,
    })
  }

  return data
}

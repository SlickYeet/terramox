"use server"

import { env } from "@terramox/env"
import z from "zod"

import { normalizeResourceName } from "@/lib/utils"
import type { CreateVMRequestSchema } from "@/validators"

export async function createVM(values: z.infer<typeof CreateVMRequestSchema>) {
  const normalizedValues = {
    ...values,
    name: normalizeResourceName(values.name),
  }

  const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/vm/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(normalizedValues),
  })
  const data = await res.json()

  if (!res.ok) {
    throw new Error("Failed to create VM", {
      cause: data.error,
    })
  }

  return data
}

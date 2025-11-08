import z from "zod"

export const CreateVMRequestSchema = z.object({
  name: z.string(),
  cpu: z.number(),
  memory: z.number(),
})

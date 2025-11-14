import z from "zod"

import { applyTerraform } from "@terramox/terraform"

import { createTRPCRouter, publicProcedure } from "../init"

export const vmRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        name: z.string().min(1),
        os: z.object({
          type: z.enum(["ubuntu", "debian"] as const),
          version: z.string().min(1),
        }),
      })
    )
    .mutation(async ({ input }) => {
      const output = await applyTerraform({
        vm_name: input.name,
        vm_os: input.os.type,
        vm_os_version: input.os.version,
      })
      return { success: true, output }
    }),
})

import z from "zod"
import { createTRPCRouter, publicProcedure } from "../init"

export const helloWorldRouter = createTRPCRouter({
  helloWorld: publicProcedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      }
    }),
})

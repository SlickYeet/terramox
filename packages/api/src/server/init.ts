import { initTRPC } from "@trpc/server"
import superjson from "superjson"
import z, { ZodError } from "zod"

export async function createTRPCContext(opts: { headers: Headers }) {
  return {
    ...opts,
  }
}

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? z.treeifyError(error.cause) : null,
      },
    }
  },
})

export const createTRPCRouter = t.router
export const createCallerFactory = t.createCallerFactory

export const publicProcedure = t.procedure
// export const protectedProcedure = t.procedure.use(({ ctx, next }) => {
//   if (!ctx.session?.user) {
//     throw new TRPCError({ code: "UNAUTHORIZED" })
//   }
//   return next({
//     ctx: {
//       session: {
//         ...ctx.session,
//         user: ctx.session.user,
//       },
//     },
//   })
// })

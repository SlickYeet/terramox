import { createCallerFactory, createTRPCRouter } from "./init"
import { vmRouter } from "./routers/vm"

export const appRouter = createTRPCRouter({
  vm: vmRouter,
})

export type AppRouter = typeof appRouter

export const createCaller = createCallerFactory(appRouter)

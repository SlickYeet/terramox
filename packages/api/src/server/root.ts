import { createCallerFactory, createTRPCRouter } from "./init"
import { helloWorldRouter } from "./routers/hello-world"

export const appRouter = createTRPCRouter({
  helloWorld: helloWorldRouter,
})

export type AppRouter = typeof appRouter

export const createCaller = createCallerFactory(appRouter)

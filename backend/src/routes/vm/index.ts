import { Router } from "express"

import createRouter from "./create/route"
import deleteRouter from "./delete/route"

const router = Router()

router.use("/create", createRouter)
router.use("/delete", deleteRouter)

export default router

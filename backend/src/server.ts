import express from "express"

import vmRouter from "@/routes/vm/index"

const app = express()
app.use(express.json())

app.use("/vm", vmRouter)

app.listen(3000, () => console.log("Terraform API listening on port 3000"))

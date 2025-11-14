import express from "express"

import vmRouter from "@/routes/vm"

const app = express()
app.use(express.json())

app.use("/api/vm", vmRouter)

app.listen(4000, () => console.log("Terraform API listening on port 4000"))

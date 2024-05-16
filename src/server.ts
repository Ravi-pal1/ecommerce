import { Prisma, PrismaClient } from '@prisma/client'
import express, { Express, Request, Response } from 'express'
import config from './config'
import rootRouter from './routes'

const app: Express = express()
const prisma = new PrismaClient()

app.use("/api", rootRouter)

app.get("/", function (req: Request, res: Response) {
    res.send("Working")
})

app.listen(config.PORT, () => console.log("Server in running on PORT 4000")
)
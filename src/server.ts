import express, { Express, Request, Response } from 'express'
import config from './config'
import rootRouter from './routes'

const app: Express = express()


app.use(express.json())

app.use("/api", rootRouter)

app.get("/", async function (req: Request, res: Response) {
    res.send("hello world").status(200)
})

app.listen(config.PORT, () => console.log("Server in running on PORT ", config.PORT)
)
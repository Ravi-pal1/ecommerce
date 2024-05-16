import express, { Express, Request, Response } from 'express'

const app: Express = express()

app.get("/", function (req: Request, res: Response) {
    res.send("Working")
})

app.listen(4000, () => console.log("Server in running on PORT 4000")
)
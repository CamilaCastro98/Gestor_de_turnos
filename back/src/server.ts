import express, { NextFunction, Request, Response } from "express"
import router from "./routes"
import morgan from "morgan"
import cors from "cors"
import ICustomError from "./interfaces/ICustomError"

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

app.use("/",router)

app.use((err: ICustomError,req: Request,res: Response,next: NextFunction)=> {
    res.status(err.statusCode || 500).json({ error:err.message })
})

export default app
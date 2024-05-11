import express, { NextFunction, Request, Response } from "express"
import router from "./routes"
import morgan from "morgan"
import cors from "cors"
import CustomError from "./errors/CustomError"

const app = express()

app.use(express.json())
app.use(morgan("dev"))
app.use(cors())

app.use("/",router)

app.use((err: Error | CustomError,req: Request,res: Response,next: NextFunction)=> {
    if (err instanceof CustomError) {
        return res.status(err.statusCode).json({ error:err.message })
    } else {
        return res.status(500).json({ error:err.message })
    }
})

export default app
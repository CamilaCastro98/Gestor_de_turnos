import app from "./server"
import { PORT } from "./configs/envs"
import "reflect-metadata"
import { AppDataSource } from "./configs/data-source"

const serverListen = async () => {
    try {
        await AppDataSource.initialize()
        app.listen(PORT,()=> {
            console.log(`listening on port ${PORT}`)
        })
    }
    catch(error) {
        console.error({ "Error al iniciar el servidor":error})
    }
}

serverListen()

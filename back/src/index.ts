import app from "./server"
import { PORT } from "./configs/envs"

app.listen(PORT,()=> {
    console.log(`listening on port ${PORT}`)
})
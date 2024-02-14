import express from "express"
import dotenv from "dotenv"
import conectarDB from "./config/db.js"
import usuarioRoutes from "./routes/usuarioRoutes.js"
import proyectoRoutes from "./routes/proyectoRoutes.js"
import tareaRoutes from "./routes/tareaRoutes.js"

const app = express()
app.use(express.json())
dotenv.config()
conectarDB()

//Routing
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/proyectos', proyectoRoutes)
app.use('/api/tareas', tareaRoutes)


app.listen(process.env.PORT || 4000 , ()=>{
    console.log(`servidor corriendo en el puerto ${process.env.PORT}`)
}) 
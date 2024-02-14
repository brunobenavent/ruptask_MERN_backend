import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI)
        console.log(process.env.MONGO_URI)
        const url=`${connection.connection.host}:connection.connection.port`
        console.log(`MongoDB conectado en: ${url}`)  //muestra en consola la url de conexion a la base de datos )
        
    } catch (error) {
        console.log(`error: ${error.message}`)
        process.exit(1) //termina la app si no se pudo conectar a la base de datos
    }
}

export default conectarDB;
import {Schema, model} from "mongoose";

const proyectosSchema = Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        required: true,
        trim: true
    },
    fechaEntrega: {
        type: Date,
        defauult: Date.now()
    },
    cliente: {
        type: String,
        required: true,
        trim: true
    },
    creador: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    },
    colaboradores: [
    {
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }
    ]   
},{
    timestamps: true
})

const Proyecto = model('Proyecto', proyectosSchema)

export default Proyecto


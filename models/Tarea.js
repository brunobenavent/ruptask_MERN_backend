import {Schema, model} from "mongoose";

const tareaSchema = Schema({
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
    estado: {
        type: Boolean,
        dafault: false
    },
    fechaEntrega: {
        type: Date,
        required: true,
        default: Date.now()
    },
    prioridad: {
        type: String,
        required: true,
        enum: ["Baja", "Media", "Alta"]
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: "Proyecto",
    }
},{
    timestamps: true
})
const Tarea = model('Tarea', tareaSchema)

export default Tarea
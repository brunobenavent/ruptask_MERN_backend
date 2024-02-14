import mongoose from "mongoose"
import Proyecto from "../models/Proyecto.js"
import Tarea from "../models/Tarea.js"

const agregarTarea = async (req, res)=> {
    const {proyecto} = req.body
    //Comprobamos que exista el proyecto
    if(mongoose.Types.ObjectId.isValid(proyecto)){
        const existeProyecto = await Proyecto.findById(proyecto)
        if(!existeProyecto){
            const error = new Error('El proyecto no existe')
            return res.status(400).json({msg:error.message})
        }
        if(existeProyecto.creador.toString() !== req.usuario._id.toString()){
            const error = new Error('Acción no valida');
            return res.status(401).json({msg: error.message})
        }
        try {
            const tareaAlmacenada = await Tarea.create(req.body)
            res.json(tareaAlmacenada)
        } catch (error) {
            console.log(error)
        }
    }else{
        const error = new Error('Proyecto invalido');
        return res.status(401).json({msg: error.message})
    }
    
}
    

const obtenerTarea = async (req, res)=> {
    const { id } = req.params
    if(mongoose.Types.ObjectId.isValid(id)){
        //Comprobar si la tarea existe
        const tarea = await Tarea.findById(id).populate('proyecto')
        if(tarea.proyecto.creador.toString() !== req.usuario._id.toString()){
            const error = new Error('Acción no valida');
            return res.status(401).json({msg: error.message})
        }

        res.json(tarea)
    }else{
        const error = new Error('La tarea no existe');
        return res.status(401).json({msg: error.message})
    }
     

}

const actualizarTarea = async (req, res)=> {
    const { id } = req.params
    if(mongoose.Types.ObjectId.isValid(id)){
        //Comprobar si la tarea existe
        const tarea = await Tarea.findById(id).populate('proyecto')
        if(tarea.proyecto.creador.toString() !== req.usuario._id.toString()){
            const error = new Error('Acción no valida');
            return res.status(401).json({msg: error.message})
        }

        tarea.nombre = req.body.nombre || tarea.nombre
        tarea.descripcion = req.body.descripcion || tarea.descripcion
        tarea.fechaEntrega = req.body.fechaEntrega || tarea.fechaEntrega
        tarea.prioridad = req.body.prioridad || tarea.prioridad
        try {
            const tareaAlmacenada = await tarea.save()
            res.json(tareaAlmacenada)
            
        } catch (error) {
            console.log(error)
        }

    }else{
        const error = new Error('La tarea no existe');
        return res.status(401).json({msg: error.message})
    }
    

}

const eliminarTarea = async (req, res)=> {
    const { id } = req.params
    if(mongoose.Types.ObjectId.isValid(id)){
        //Comprobar si la tarea existe
        const tarea = await Tarea.findById(id).populate('proyecto')
        if(tarea.proyecto.creador.toString() !== req.usuario._id.toString()){
            const error = new Error('Acción no valida');
            return res.status(401).json({msg: error.message})
        }
        try {
            await tarea.deleteOne()
            res.json({msg: "Tarea eliminada correctamente"})
        } catch (error) {
            console.log(error)
        }

    }else{
        const error = new Error('La tarea no existe');
        return res.status(401).json({msg: error.message})
    }
}

const cambiarEstado = async (req, res)=> {}


export {
    agregarTarea,
    obtenerTarea,
    actualizarTarea,
    eliminarTarea,
    cambiarEstado
}
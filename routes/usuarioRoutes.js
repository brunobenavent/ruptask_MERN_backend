import express from "express"
import { autenticar, comprobarToken, confirmar, nuevoPassword, olvidePassword, perfil, registrar } from "../controllers/usuarioControllers.js"
import checkAuth from "../middleware/checkAuth.js"
const router = express.Router()

router.post('/', registrar) //crea nuevo usuario
router.post('/login', autenticar) //
router.get('/confirmar/:token', confirmar) //
router.post('/olvide-password', olvidePassword) //
router.get('/olvide-password/:token', comprobarToken) //comprueba el token y permite ver el formulario
router.post('/olvide-password/:token', nuevoPassword) //
router.get('/perfil', checkAuth, perfil )

 
export default router

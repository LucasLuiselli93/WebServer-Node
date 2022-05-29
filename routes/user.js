const {Router} = require("express")
const { usersGet,
        usersDelete,
        usersPost,
        usersPut} = require("../controllers/user")


const router = Router()


//Esta es la ruta   (esto es el controlador). El usuarioGet no es la funcion, sino la referencia
router.get("/",  usersGet)

router.delete('/',usersDelete )

router.post('/', usersPost)
//Express parsea el id y me lo da como variable
 router.put('/:id',usersPut
 )

module.exports = router
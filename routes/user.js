const {Router} = require("express")
const router = Router()
const {check} = require("express-validator")
const {validarCampos} = require("../middleware/validarCampos")
const { validRole, validEmail, validId } = require("../helpers/dbValidators")

const { usersGet,
        usersDelete,
        usersPost,
        usersPut} = require("../controllers/user")



//Esta es la ruta   (esto es el controlador). El usuarioGet no es la funcion, sino la referencia
router.get("/",  usersGet)

router.delete('/:id',[
    check("id","no es un id valido").isMongoId(),
    //validacion personalizada para saber si existe el id
    check("id").custom (validId),
    validarCampos
] ,usersDelete )

//arreglo de middleware
router.post('/',[  
    check("name", "El name no es válido").not().isEmpty(),
    check("password", "El password no es válido").isLength({ min:8 }),
    check("email", "El email no es válido").isEmail(),
    check("email").custom( validEmail ),
    check("role").custom( validRole ),
    validarCampos


], usersPost)
//Express parsea el id y me lo da como variable
 router.put('/:id',[
     check("id","no es un id valido").isMongoId(),
     //validacion personalizada para saber si existe el id
     check("id").custom (validId),

     check("role").custom( validRole ),
     // Tiene que estar para que no continue a las rutas
     validarCampos
 ],usersPut,
 )

module.exports = router

const { validationResult } = require('express-validator');


const validarCampos = (req, res, next) =>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      // funcion que sigue con el siguiente middleware, si no hay ninguno sigue con el controladdor
      next();
}




module.exports = {
  validarCampos}
const {response} = require("express")

const usersGet = (req, res = response) => {
    res.json({
      msg:"get api-controlador"
    })
}

const usersDelete = (req, res = response) => {
    res.json({
      msg:"delete controlador"
    })
  }


const usersPost = (req, res = response) => {

    //const body = req.body;
    const { nombre }= req.body;
    res.json({
      
      msg:"post controlador",
      nombre
    })
  }

const usersPut =  (req, res = response) => {

    const id = req.params.id

    res.json({
      ok: true,
      msg:"put controlador",
      id
    })
  }
//van a ser muchos mejor exportarlo como objeto
module.exports = {
    usersGet,
    usersDelete,
    usersPost,
    usersPut
    
}
const {response} = require("express")
const Users = require("../models/user")
const bcrypt = require("bcryptjs")
//const user = require("../models/user")

const usersGet = async (req, res = response) => {

  const {limite = 5, desde =0} = req.query
  // la constante me sirve de referencia para traer solo a los usuarios con el state en true
  const userState = {state: true}
  // const users = await Users.find(userState)
  //     .skip(Number ( desde ) )
  //     .limit(Number ( limite ) );

  //     const total = await Users.countDocuments(userState)

      const resp =  await Promise.all([
        Users.count(userState),
        Users.find(userState)
          .skip(Number(desde))
          .limit(Number ( limite ) )
      ])

    res.json({
      resp
     
    })
}

const usersDelete = async (req, res = response) => {

  const {id} = req.params

  const user = await Users.findByIdAndUpdate( id, {state:false})


    res.json(
    { user
    
    }
    )
  }




const usersPost = async (req, res = response) => {

    //const body = req.body;
    const {name,email,password,role} = req.body;
    const users = new Users({name,email,password,role})
  

    //Verificar si el correo existe
  

    //encriptar
    const salt = bcrypt.genSaltSync(10);
    users.password = bcrypt.hashSync( password,salt )
    
    //guardar
    await users.save()

    res.json({
      users
    })
  }



const usersPut =  async (req, res = response) => {

    const {id} = req.params
    const { _id ,password,google,correo, ...rest} = req.body

    //validar contra db

    if(password){
      //encriptar
      const salt = bcrypt.genSaltSync(10);
      rest.password = bcrypt.hashSync( password,salt )
    }

    const user = await Users.findByIdAndUpdate(id,rest)

    res.json({
   
      user
    })
  }
//van a ser muchos mejor exportarlo como objeto
module.exports = {
    usersGet,
    usersDelete,
    usersPost,
    usersPut
    
}
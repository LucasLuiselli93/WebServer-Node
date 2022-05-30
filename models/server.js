const express = require('express')
const cors = require('cors')
const { dbConnection } = require('../Database/configDb')
const bodyParser = require<("body-parser")


class Server{

    constructor(){
        this.app = express()
       
        this.port = process.env.PORT

        //conectar base de datos
        this.conectDB()

        // MIDDLEWARE funciones que se encargan de la gestion de los datos, 
        //la mensajeria, la autenticacion, y la gestion dela api
        this.middleware()

        // Rutas de la app
        this.routes()

        
        
    }

    async conectDB(){
      await dbConnection()
    }

    middleware(){
      //directorio publico
      this.app.use(express.static("public"))

      //cors-->proteccion de rutas de la api
      this.app.use(cors())


      //Lectura y parseo del body
      this.app.use(express.urlencoded({extended: true})); // para el formData
      this.app.use(express.json() );
    


    }


    routes(){
      this.app.use("/api/user", require("../routes/user"))
     
    }

    listen(){
     
      this.app.listen(this.port, () => {
      console.log(`Example app listening on port ${this.port}`)
    })
    }


}

module.exports = Server
const mongoose = require("mongoose")

const dbConnection = async()=>{

    try {
        await mongoose.connect(process.env.MONGODB)

        console.log("Base de datos conectada")

    } catch (error) {
        console.log(error)
        throw new error("Error en la base de datos")
    }

}

module.exports={
    dbConnection
}
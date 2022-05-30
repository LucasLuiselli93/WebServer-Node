// { Modelo en Mongo
//     name: "",
//     email:"",
//     password:"",
//     img:"url",
//     role:"user",
//     estado:false,
//     google:false
// }

const{Schema,model}= require("mongoose")

const UsersSchema = Schema({
    name:{
        type:String,
        required:[true,"El nombre es obligatorio"]
    },
    email:{
        type:String,
        required:[true,"El email es obligatorio"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"El nombre es obligatorio"]
    },
    password:{
        type:String,
        required:[true,"El nombre es obligatorio"]
    },
    img:{
        type:String,
    },
    role:{
        type:String,
        required:true,
        emun:["ADMIN","USER"]
    },
    state:{
        type:Boolean,
        default:true
    },
    google:{
        type:Boolean,
        default:false
    },
    
})

//FUncion que oculta pass y version 
// tiene que ser una funcion normal. Necesitamos el this que harà referencia a la instancia 
UsersSchema.methods.toJSON = function() {
    const { __v,password, ...users} = this.toObject();
    return users
}



module.exports= model("Users",UsersSchema)
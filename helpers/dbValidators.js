const Role = require("../models/role")
const User = require("../models/user")

const validRole= async(role="")=>{
    const existRole = await Role.findOne({role})
    if(!existRole){
        throw new Error(`El error ${role} no esta registrada en la db`)
    }
}

const validEmail = async(email="")=>{
    const existEmail = await User.findOne({ email })
    if(existEmail){
        throw new Error(`El error ${email} no esta registrada en la db`)
    }
}

const validId = async(id)=>{
    const existId = await User.findById(id)
    if(!existId){
        throw new Error(`El id ${id} no esta registrada en la db`)
    }
}



module.exports={
    validRole,
    validEmail,
    validId
}


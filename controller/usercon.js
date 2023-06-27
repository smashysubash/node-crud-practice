const usermodel = require('../model/user')

const getUser = async (req,res)=>{
    try{
        const data = await usermodel.find()
        res.status(200).json(data)
    }catch(error){
        res.status(400).json({error})
    }
}

module.exports = {
    getUser
}
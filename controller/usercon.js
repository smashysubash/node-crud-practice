const usermodel = require('../model/user')

const getUser = async (req,res)=>{
    try{
        const data = await usermodel.find()
        res.status(200).json(data)
    }catch(error){
        res.status(400).json({error})
    }
}

const addUser = async (req,res)=>{
    try {
        const data = new usermodel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        })   
        try {
            const dataToSave = await data.save();
            res.status(200).json({ "success":true, "error":null, "id":dataToSave._id})
        }
        catch (error) {
            res.status(500).json({ "success":false, "error": error.message})
        }    
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getUser,
    addUser
}
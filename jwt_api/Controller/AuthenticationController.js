const User = require('../Models/user')
const { Op } = require("sequelize");


exports.registerUser = (req, res) =>{
    
    console.log("data", req.body)
    User.findOne({
        where:{
            [Op.or]: [
                { username: req.body.data.username },
                { email: req.body.data.email }
            ]
        }
    })
    .then((result)=>{
        if(result){
            res.json({
                status: 400,
                message: "User Already Exits. Please try anothe Username of Password"
            })
        }
        
        User.create(req.body.data)
        .then((response)=>{
            res.json({
                status: 200,
                message: "User created Successfully"
            })
        })
        .catch((error)=>{
            res.json({
                status: 400,
                message: error
            })
        })

    })
    .catch((error)=>{
        res.json({
            status: 400,
            message: error
        })
    })

} 
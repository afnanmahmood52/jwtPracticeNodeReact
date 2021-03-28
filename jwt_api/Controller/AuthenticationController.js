const User = require('../Models/user')
const { Op } = require("sequelize");
const bcrypt = require("bcrypt")



exports.registerUser = (req, res) =>{

    console.log("body", req.body)
    User.findOne({
        where:{
            [Op.or]: [
                { username: req.body.username },
                { email: req.body.email }
            ]
        }
    })
    .then((result)=>{
        // Duplicate User Exists
        if(result){
            return res.json({
                status: 400,
                message: "User Already Exits. Please try anothe Username of Password"
            })
        }
        
        bcrypt.hash(req.body.password, 10)
        .then((hashPassword)=>{
            req.body['password'] = hashPassword
            
            User.create(req.body)
            .then((response)=>{
                return res.json({
                    status: 200,
                    message: "User created Successfully"
                })
            })
            .catch((error)=>{
                return res.json({
                    status: 400,
                    message: error
                })
            })


        })
        .catch((error)=>{
            return res.json({
                status: 400,
                message: error
            })
        })
        
    })
    .catch((error)=>{
        return res.json({
            status: 400,
            message: error
        })
    })

} 

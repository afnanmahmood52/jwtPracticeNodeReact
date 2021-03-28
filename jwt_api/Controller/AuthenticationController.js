const User = require('../Models/user')
const { Op } = require("sequelize");
const bcrypt = require("bcrypt")



exports.registerUser = (req, res) =>{
    User.findOne({
        where:{
            [Op.or]: [
                { username: req.body.data.username },
                { email: req.body.data.email }
            ]
        }
    })
    .then((result)=>{
        // Duplicate User Exists
        if(result){
            res.json({
                status: 400,
                message: "User Already Exits. Please try anothe Username of Password"
            })
        }
        
        bcrypt.hash(req.body.data.password, 10)
        .then((hashPassword)=>{
            req.body.data['password'] = hashPassword
            
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
        
    })
    .catch((error)=>{
        res.json({
            status: 400,
            message: error
        })
    })

} 

// const User = require('../Models/user')
const { Op, QueryTypes} = require("sequelize");
const db = require("../db/db.config");
const {statusCode} = require('../Config/StatusCodes')

exports.getAllUsers = (req, res) =>{
    console.log("body", req.body)

    db.query('SELECT user_name, email, role_id FROM user', {
        type: QueryTypes.SELECT
    })
    .then((results)=>{
        console.log("search results", results)    
        if(results && results.length > 0){
            return res.json({
                status: statusCode.SUCESS,
                message: "Records found",
                data: results
            })
        }

        return res.json({
            status: statusCode.NOT_FOUND,
            message: "No Records found",
            data: results
        })
     
    })
    .catch((error)=>{
        return res.json({
            status: statusCode.SERVER_TIMEOUT,
            message: error,
            data:{}
        })
    })

} 

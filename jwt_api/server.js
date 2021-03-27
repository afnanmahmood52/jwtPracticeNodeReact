require("dotenv").config({path: '../.env'});
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const db = require('./db/db.config')

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

const AuthenticationController = require('./Controller/AuthenticationController')

const port = process.env.JWT_API_PORT_NO
const api_url = process.env.JWT_API_HOST

app.
get('/', (req, res) => {
  res.send('Hello World!')
})

app.
post('/register', AuthenticationController.registerUser)



db.authenticate()
.then(()=>{
  console.log("successfully connected to db")
})
.catch((error)=>{
  console.log("error connecting to db")
})


app.listen(port, api_url, () => {
  console.log(`Example app listening at ${api_url}:${port}`)
})
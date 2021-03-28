require("dotenv").config({path: '../.env'});
const cors = require('cors')
const express = require('express')
const app = express()
const db = require('./db/db.config')

app.use(cors())
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded({     // to support URL-encoded bodies
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
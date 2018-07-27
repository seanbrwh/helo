require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
let {SERVER_PORT,CONNECTION_STRING} = process.env

const app = express();

app.use(bodyParser.json())

app.use(session({
  secret:'123abc',
  resave:false,
  saveUninitialized:false
}))

massive(CONNECTION_STRING).then(connect=>{
  app.set('db', connect);

})

//post Endpoing register create user in db should respond with new user
app.post('/api/user', async (req,res,next)=>{
  const db = req.app.get('db');
  let {username,password} = req.body
  db.create_user([username,password])
})


app.listen(SERVER_PORT,()=>{
  console.log(`Listening on Port: ${SERVER_PORT}`);
})
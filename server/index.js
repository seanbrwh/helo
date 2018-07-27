require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
// const cors = require('cors')
let {SERVER_PORT,CONNECTION_STRING} = process.env

const app = express();

app.use(bodyParser.json())
// app.use(cors)

app.use(session({
  secret:'123abc',
  resave:false,
  saveUninitialized:false
}))

massive(CONNECTION_STRING).then(connect=>{
  app.set('db', connect);

})

//post Endpoing register create user in db should respond with new user
app.post('/api/user', (req,res)=>{
  const db = req.app.get('db');
  let {username,password} = req.body
  db.create_user([username,password]).then(response=>{
    res.status(200).send(response.data)
  })
})
app.post('/api/user', (req,res)=>{
  const db = req.app.get('db')
  let {username,password} = req.body
  db.find_user([username,password]).then(response=>{
    res.status(200).send(response.data)
  })
})
app.get('/api/posts/:id',(req,res)=>{
  const db = req.app.get('db')
  const {search,checkbox} = req.query
  const {id} = req.params
  db.get_posts().then(response=>{
    //if userposts true and there is a search string return all posts where the title contains the seearch string

    //if userposts is false and there is no search strings return all posts where the current user is not the author

    //if userpost is false and there is a search string return all posts where current user is not author and the title   contains the search string
  })
})


app.listen(SERVER_PORT,()=>{
  console.log(`Listening on Port: ${SERVER_PORT}`);
})
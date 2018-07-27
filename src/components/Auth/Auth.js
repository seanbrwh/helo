import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Auth extends Component {
  constructor(){
    super()
    this.state = {
      username:'',
      password:''
    }
  }
  hanCha(name,v){
    if(name === 'user'){
      this.setState({username:v})
    }else if(name==='pass'){
      this.setState({password:v})
    }
  }
//method send a req to post endpoint take username pas put n body once back navigate to dashboard setup to register
register(){
  let {username,password} = this.state
  axios.post('/api/user', {username,password}).then(res=>{
    console.log(res.data)
  })
}
  render() {
    // console.log(this.state)
    return (
      <div className='App'>
      <input placeholder="UserName" type="text" onChange={(e)=>this.hanCha('user',e.target.value)}/>
      <input placeholder="Password" type="password" onChange={(e)=>this.hanCha('pass',e.target.value)}/>
      <button>Login</button>
      <Link to='/dashboard'>
      <button onClick={()=>this.register()}>Register</button>
      </Link>
      
      
      </div>
    )
  }
}

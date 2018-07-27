import React, { Component } from 'react'
import pic from './placeholder.png'
import axios from 'axios'

export default class Dashboard extends Component {
  constructor(){
    super()
    this.state ={
      search:'',
      checkbox:true,
      posts:[{post_id:1,conent:'Hello How are you doing today',photo:pic},{post_id:2,conent:'Hello How are you doing today',photo:pic},{post_id:3,conent:'Hello How are you doing today',photo:pic},{post_id:4,conent:'Hello How are you doing today',photo:pic}]
    }
  }
  getPosts(){
    axios.get('/api/posts/:id').then(res=>{
      console.log(res.data)
    })
  }
  render() {
    return (
      <div className='App'>
        <input type="text"/>  
        <button onClick={()=>this.getPosts()}>Get All posts</button>
        <button>Search</button>
        <button>Reset</button>
        <label>My Posts
          <input type="checkbox"/>
        </label>
        {
          this.state.posts.map(e=>{
            return(
              
            <div key={e.post_id}>
              <p>{e.id}</p>
              <p>{e.conent}</p>
              <img src={e.photo} alt=""/>
            </div>)
          })
        }
      </div>
    )
  }
}

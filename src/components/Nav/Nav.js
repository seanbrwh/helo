import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

function Nav(props){
  return (
    <div>
      {console.log(props)}
      {
        props.location.pathname === '/' ? null : <nav>NAV</nav>
      }
    </div>
  )
}
function mapStateToProps(state){
  let {username,profilepic} = state
  return{
    username,profilepic
  }
}
export default connect(mapStateToProps)(withRouter(Nav))
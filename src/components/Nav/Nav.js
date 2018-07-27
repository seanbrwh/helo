import React from 'react'
import {withRouter} from 'react-router-dom'

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
export default withRouter(Nav)
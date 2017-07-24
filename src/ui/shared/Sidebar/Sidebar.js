import React from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends React.Component{
  render(){
    return(
      <div className="sidebar">
        <Link to='/'>Home</Link>
        <Link to='/signup'>注册</Link>
      </div>
    )
  }
}

export default Sidebar

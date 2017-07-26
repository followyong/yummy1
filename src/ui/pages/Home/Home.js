import React from 'react'
import logo from './logo.svg'
import {Link} from 'react-router-dom'
import './home.css'

class Home extends React.Component{
  render(){
    return(
      <div className='home'>
        <div className="hero">
          {/* hero是一个网页醒目的一大块 */}
          <img src={logo} className="app-logo" alt="logo"/>
          <h1 className="title">
            吮指
          </h1>
          <p className="slogan">
            {/* slogan是口号的意思 */}
            享受舌尖艳遇
          </p>
        </div>
        <div className="actions">
          <Link to="/signup">注册</Link>
          <Link to="/login">登录</Link>
        </div>
      </div>
    )
  }
}

export default Home

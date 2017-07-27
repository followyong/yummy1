import React from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './login.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Settings from '../../../Settings.js'

class Login extends React.Component{
  login = (e) => {
    e.preventDefault()
    let data ={
      username:'follow',
      password:'123'
    }
    axios.post(`${Settings.host}/user/login`,data)
    .then(res => console.log(res.data))
    .catch(err => alert(err))
    this.formValue.reset()
  }
  render(){
    return(
      <div className="login">
        <TitleHeader title="login" />
        <div className="login-content">
          <div className="login-hero">
            <h1 className="title">
              登录
            </h1>
            <p className="slogan">
              连接一个个小而确定的幸福
            </p>
          </div>
          <div className="login-form-wrap">
            <form ref={value=>this.formValue=value} onSubmit={this.login} className="signup-form">
              <div className="login-form-input">
                <input type="text" placeholder="用户名"/>
                <input type="password" placeholder="密码"/>
              </div>
              <div className="login-actions">
                <button type="submit">登录</button>
              </div>
            </form>
          </div>
          <div className="login-other-option">
            <Link to='/signup'>没有账号？需要注册</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Login

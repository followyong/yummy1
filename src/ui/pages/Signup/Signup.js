import React from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './signup.css'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Settings from '../../../Settings.js'

class Signup extends React.Component{
  signup = (e) => {
    e.preventDefault()
    let username=this.usernameInput.value
    let password=this.passwordInput.value
    let data ={
      username,
      password
    }
    axios.post(`${Settings.host}/user/signup`,data)
    .then(res =>{
      console.log(res.data)
      console.log(this.props)
    })
    .catch(err => alert(err.response.data.msg))
    this.formValue.reset()
  }
  render(){
    return(
      <div className="signup">
        <TitleHeader title="signup" />
        <div className="signup-content">
          <div className="signup-hero">
            <h1 className="title">
              注册
            </h1>
            <p className="slogan">
              连接一个个小而确定的幸福
            </p>
          </div>
          <div className="signup-form-wrap">
            <form ref={value=>this.formValue=value} onSubmit={this.signup} className="signup-form">
              <div className="signup-form-input">
                <input ref={value=>this.usernameInput=value} type="text" placeholder="用户名"/>
                <input type="email" placeholder="email"/>
                <input ref={value=>this.passwordInput=value} type="password" placeholder="密码"/>
                <input type="password" placeholder="请在输入一次"/>
              </div>
              <div className="signup-actions">
                <button type="submit">注册</button>
              </div>
            </form>
          </div>
          <div className="signup-other-option">
            <Link to='/login'>已有账号？直接登录</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Signup

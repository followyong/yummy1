import React from 'react'
import './alert-box.css'

class AlertBox extends React.Component{
  render(){
    return(
      <div className="alert-box">
        <div className="alert-content-card">
          <div className="alert-msg">
            报错信息
          </div>
          <div className="alert-close-button">
            关闭
          </div>
        </div>
      </div>
    )
  }
}

export default AlertBox

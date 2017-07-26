import React from 'react'
import TitleHeader from '../../shared/TitleHeader/TitleHeader'
import './signup.css'

class Signup extends React.Component{
  render(){
    return(
      <div className="signup">
        <TitleHeader title="signup" />
        <div className="signup-content">
          <div className="signup-hero">
            hero
          </div>
          <div className="signup-form-wrap">
            <form className="signup-form">
              
            </form>
          </div>
          <div className="signup-actions">
            actions
          </div>
        </div>
      </div>
    )
  }
}

export default Signup

import React, { Component } from 'react'
import axios from 'axios'
import Settings from '../../../../settings'
import { connect } from 'react-redux'
import './comment.css'
import moment from 'moment'
import 'moment/locale/zh-cn'
import {
  Link
} from 'react-router-dom'

class Comment extends Component {
  newComment = (e) => {
    e.preventDefault()
    let content = this.commentInput.value
    if(!content) {
      return
    }
    let user = localStorage.getItem('userId')
    let dish = this.props.dishId
    axios.post(`${Settings.host}/comment`, { content, user, dish }).then(res => {
      console.log('newComment...', res.data)
      axios.get(`${Settings.host}/comments`).then(
        res => {
          const { comments } = res.data
          this.props.dispatch({ type: 'LOAD_COMMENTS', comments })
        }
      )
      this.commentInput.value = ''
    }).catch(err => {
      console.log('err', err)
      if(err.response) { console.log('err.response', err.response.data.err)}
    })
  }
  render(){
    let { comments } = this.props
    moment.locale('zh-cn')
    let hereCommentKeys = Object.keys(comments).filter(id => comments[id].dish._id === this.props.dishId)

    let commentList = hereCommentKeys.map( id => (
        <li className="comment-item"
          key={id}>
          <img src="http://media.haoduoshipin.com/yummy/default-avatar.png" alt="avatar" />
          <div className="comment-detail">
            <div className="username-time">
              <div className="comment-username">
                {comments[id].user.username}
              </div>
              <div className="comment-time">
                {moment(comments[id].createdAt).fromNow()}
              </div>
            </div>
            <div className="comment-content">
              {comments[id].content}
            </div>
          </div>
        </li>
      ))

    const commentForm = (<form className="comment-form"
      onSubmit={this.newComment}>
      <input ref={value => this.commentInput = value}
       type="text"  />
     <button type="submit">评论</button>
    </form>)

    const plzLogin = (
      <div className="comment-plz-login">
        发评论请先<Link to="/login">登录</Link>
      </div>
    )
    return(
      <div className="comment">
        {commentList}
        {this.props.isAuthenticated ? commentForm : plzLogin}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  comments: state.comment.all,
  isAuthenticated: state.account.isAuthenticated
})

export default connect(mapStateToProps)(Comment)

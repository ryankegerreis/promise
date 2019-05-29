import React, { Component } from 'react'
import api from '../../api'

export default class Comment extends Component {

  state = {
    comment: '',
    comments: []
  }

  componentDidMount() {
    api.getTheComments(this.props.match.params.id)
      .then(allcomments => {
        console.log(allcomments)
        this.setState({
          comments: allcomments.comments
        })
      })
      .catch(err => console.log(err))
  }

  setComment = (e) => {
    this.setState({
      comment: e.target.value
    })
  }

  addComment = () => {
    console.log(this)
    api.createComment(this.state, this.props.match.params.id).then(newcomment => {
      console.log(newcomment)
      this.setState({
        comments: [...this.state.comments, newcomment]
      })
    })
  }

  showComments = () => {
    return this.state.comments.map(eachComment => {
      return <li>{eachComment.comment}</li>
    })
  }

  render() {
    return (
      <div>
        {this.showComments()}
        <input type="text" onChange={this.setComment} />
        <button onClick={this.addComment}>Add Comment</button>
      </div>
    )
  }
}

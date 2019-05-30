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
      return <p className='caveat'>{eachComment.comment}</p>
    })
  }

  render() {
    return (
      <div>
        <div>
          <h3 className='marker pad'>Comments</h3>
          {this.showComments()}
          <input type="text" onChange={this.setComment} />
          <button className='btn btn-primary rounded-lg marker' onClick={this.addComment}>Add Comment</button>
        </div>
      </div>
    )
  }
}

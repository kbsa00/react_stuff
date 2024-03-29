import React, { Component } from 'react'
import {submitComment, fetchComments} from '../actions/index';
import {connect} from 'react-redux';

class CommentBox extends Component {

    state = {comment: ''}; 

  handleChange = (event) =>{
    this.setState({comment: event.target.value})
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submitComment(this.state.comment);
    this.setState({comment: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea onChange={this.handleChange}  value={this.state.comment}/>
          <div>
            <button>Submit Comment</button>
          </div>
        </form>

        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    )
  }
}

export default connect(null, {submitComment, fetchComments})(CommentBox);

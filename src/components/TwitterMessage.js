import React from "react";

class TwitterMessage extends React.Component {
  state = {
      remChars: this.props.maxChars
    };
  


  handleMessageChange = (event) =>{

    this.setState({
      message: event.target.value, 
      remChars: this.state.remChars - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleMessageChange(event)}type="text" name="message" id="message" value={this.state.message} />
        <h4>{this.state.remChars}</h4>
      </div>
    );
  }
}

export default TwitterMessage;

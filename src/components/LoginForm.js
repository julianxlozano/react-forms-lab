import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value 
    })
    
  }

  handleSubmit = event => {
    event.preventDefault()
    
    let formData= {username: this.state.username,password: this.state.password}

    if (!!formData['username'] && !!formData['password']){
    this.props.handleLogin(event.target)
    }
  } 

  render() {
    return (
      <form onSubmit={event=>this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input onChange={this.handleInputChange} id="username" name="username" type="text"  value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.handleInputChange} id="password" name="password" type="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

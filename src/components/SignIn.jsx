import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'demo@demo.com',
      password: 'demo@demo.com',
      error: {
        message: ''
      }
    }
  }

  signIn() {
    const { email, password } = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error => {
        this.setState({error})
      })
  }

  render() {
    return (
      <div className="container">
        <div className="form-inline">
          <h2>Sign In</h2>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              value={this.state.email}
              style={{marginRight: '5px'}}
              placeholder="email"
              onChange={event => this.setState({email: event.target.value})}
            />
            <input
              className="form-control"
              type="password"
              value={this.state.value}
              style={{marginRight: '5px'}}
              placeholder="password"
              onChange={event => this.setState({password: event.target.value})}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => this.signIn()}
            >
              Sign In
            </button>
          </div>
          <div>{this.state.error.message}</div>
          <div>
            <Link to={'/signup'}>You don't have an account? Sign up right now!</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn;

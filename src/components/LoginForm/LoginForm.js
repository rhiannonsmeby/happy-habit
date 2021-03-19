import React from 'react';
import AuthApiService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

export default class LoginForm extends React.Component {
  state = { error: null };

  handleSignIn = (event) => {
    event.preventDefault();
    this.setState({ error: null });
    const user_name = event.target.user_name;
    const password = event.target.password;

    // send username and password to server
    AuthApiService.postLogin({
      user_name: user_name.value,
      password: password.value,
    })
      .then((res) => {
        user_name.value = '';
        password.value = '';
        TokenService.saveAuthToken(res.token);
        this.props.handleGoodLogin();
      })
      .catch((res) => {
        this.setState({ error: res.error.message });
      });
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.handleSignIn}>
        {this.state.error && <p style={{ color: 'red' }}>{this.state.error}</p>}

        <div>
          <label htmlFor="username">Username</label>
          <input
            placeholder="username"
            type="text"
            name="user_name"
            id="user_name"
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
          />
        </div>
        <div className="login-form-button">
          <button type="submit">Sign In</button>
        </div>
      </form>
    );
  }
}
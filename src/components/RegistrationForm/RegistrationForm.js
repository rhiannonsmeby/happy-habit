import React from 'react';
import AuthApiService from '../../services/auth-api-service';

export default class RegistrationForm extends React.Component {
  state = { error: null };

  handleFormChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleRegisterSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    this.setState({ error: null });

    AuthApiService.postUser({
      user_name: username,
      password: password,
    })
      .then((users) => {
        this.setState({
          username: '',
          password: '',
        });

        this.props.onRegisterSuccess();
      })
      .catch((response) => {
        this.setState({ error: response });
      });
  };

  render() {
    const passMatch =
      this.state.password &&
      this.state.verifyPassword &&
      this.state.password !== this.state.verifyPassword;
    return (
      <form className="register-form" onSubmit={this.handleRegisterSubmit}>
        {this.state.error && (
          <p style={{ color: 'red' }}>{this.state.error.message}</p>
        )}
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            required
            onChange={this.handleFormChange}
          />
        </div>
        <div>
          <label htmlFor="password">
            Password <br />
            <span className="tiny-text">
              (must contain at least 1 uppercase, 1 lowercase, 1 number, and 1
              special character)
            </span>
          </label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.handleFormChange}
            required
          />
        </div>
        <div>
          <label htmlFor="verifyPassword">Verify Password</label>
          <input
            type="password"
            name="verify-password"
            id="verifyPassword"
            onChange={this.handleFormChange}
            required
          />
        </div>
        {passMatch && <p style={{ color: 'red' }}>Passwords must match</p>}
        <button type="submit" disabled={passMatch}>
          Sign Up
        </button>
      </form>
    );
  }
}
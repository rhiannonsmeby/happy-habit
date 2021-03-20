import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

class LoginRoute extends React.Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  handleLoginSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <section>
        <div className='boxed'>
          <h2>Login</h2>
          <LoginForm
            onLoginSuccess={this.handleLoginSuccess}
          />
        </div>
      </section>
    );
  }
}

export default LoginRoute
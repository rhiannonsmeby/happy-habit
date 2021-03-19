import React from 'react'
import LandingRoute from '../../routes/LandingRoute/LandingRoute'
import DashboardRoute from '../../routes/DashboardRoute/DashboardRoute'
import PrivateRoute from '../PrivateRoute/PrivateRoute'
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute'
import NavBar from '../NavBar/NavBar'
import { Route, Switch } from 'react-router'
import './App.css'
import RegistrationPage from '../../routes/RegistrationRoute/RegistrationRoute'
import LoginPage from '../../routes/LoginRoute/LoginRoute'
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute'

class App extends React.Component {
  state = {
    hasError: false
  }

  static getDerivedStateFromError(error) {
    return {hasError: true}
  }

  render() {
    return (
      <div className="App">
        <Route path='/' component={NavBar} />
        <main className="App">
          {this.state.hasError && (
            <p>Oops, looks like there was an error!</p>
          )}
          <Switch>
            <Route exact path={'/'} component={LandingRoute} />
            <PublicOnlyRoute path={'/login'} component={LoginPage} />
            <PublicOnlyRoute path={'/register'} component={RegistrationPage} />
            <PrivateRoute path={'/dashboard'} component={DashboardRoute} />
            <Route component={NotFoundRoute} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;

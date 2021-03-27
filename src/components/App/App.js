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
import EntryRoute from '../../routes/EntryRoute/EntryRoute'
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute'
import Footer from '../Footer/Footer'
import EntryContext from '../../contexts/EntryContext'
import TokenService from '../../services/token-service'

class App extends React.Component {
  state = {
    user: [],
    entry: [],
    hasError: false
  }

  static getDerivedStateFromError(error) {
    return {hasError: true}
  }

  getEntryData() {
    fetch(`http://localhost:8000/api/entry`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Something went wrong')
        }
        return response.json()
      })
      .then(data => {
        this.setState({
          entry: data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteItem = (entryId) => {
    const filterState = this.state.entry.filter(entry => {
      return entry.id !== entryId;
    })
    this.setState({
      entry: filterState
    })
  }

  addEntry = (newEntry) => {
    const addEntry = [...this.state.entry, newEntry]
    this.setState({entry: addEntry})
  }

  componentDidMount() {
    this.getEntryData();
  }

  render() {
    const contextValue = {
      entry: this.state.entry,
      deleteItem: this.deleteItem,
      addEntry: this.addEntry
    }
    return (
      <div className="App">
        <Route path='/' component={NavBar} />
        <EntryContext.Provider
          value={contextValue}>
        <main className="App">
          {this.state.hasError && (
            <p>Oops, looks like there was an error!</p>
          )}
          <Switch>
            <Route exact path={'/'} component={LandingRoute} />
            <PublicOnlyRoute path={'/login'} component={LoginPage} />
            <PublicOnlyRoute path={'/register'} component={RegistrationPage} />
            <PrivateRoute path={'/dashboard'} component={DashboardRoute} />
            <PrivateRoute path={'/entry'} component={EntryRoute} />
            <PrivateRoute path={'/entry/:id'} component={EntryRoute} />
            <Route component={NotFoundRoute} />
          </Switch>
        </main>
        <Footer />
        </EntryContext.Provider>
      </div>
    );
  }
}

export default App;

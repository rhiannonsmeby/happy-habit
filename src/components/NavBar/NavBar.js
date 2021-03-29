import React from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import './NavBar.css';

export default class NavBar extends React.Component {
    static contextType = UserContext

    handleLogoutClick = () => {
        this.context.processLogout()
    }

    renderLogoutLink() {
        function refreshPage() {
            window.location.reload(false);
        }
        
        return (
            <header>
                <nav className='top-nav'>
                    <ul className='navigation'>
                        <li className='nav-item'><Link to={`/`}>Home</Link></li>
                        <li className='nav-item' onClick={refreshPage}><Link to={`/dashboard`}>Dashboard</Link></li>
                        <li className='nav-item'><Link to={`/entry`}>Entry</Link></li>
                        <li className='nav-item'>
                            <Link
                                onClick={this.handleLogoutClick}
                                to='/login'>
                                    Logout
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }

    renderLoginLink() {
        return (
            <nav className='top-nav'>
                <ul className='navigation'>
                    <li className='nav-item'>
                        <Link to='/login'>
                            Login
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/register'>
                            Sign up
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }

    render() {
        return (
            <header>
                <h1 className='title'>
                    <Link to='/'>
                        Happy Habit
                    </Link>
                </h1>
                <nav>
                    {TokenService.hasAuthToken()
                        ? this.renderLogoutLink()
                        : this.renderLoginLink()
                    }
                </nav>
            </header>
        );
    }
}
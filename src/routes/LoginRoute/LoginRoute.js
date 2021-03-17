import React from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import AuthApiService from '../../services/auth-api-service';

export default function LoginPage(props) {

    function onLoginSuccess() {
        props.whenLoggedIn();

        const { location, history } = props;
        const destination = (location.state || {}).from || '/home';
        history.push(destination);
    }

    function handleSubmitJwtAuth(e) {
        e.preventDefault();
        const { user_name, password } = e.target;

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value
        })
            .then(res => {
                user_name.value = '';
                password.value = '';
                TokenService.saveAuthToken(res.authToken);
                onLoginSuccess();
            })
            .catch(res => {
                alert(res.error);
            })
    }

    return (
        <div className='sign-in'>
            <h2>Sign in</h2>
            <form className='sign-in-form'
                onSubmit={(e) => handleSubmitJwtAuth(e)}
            >
                <div className='form-options'>
                    <label htmlFor='user_name'>Username</label>
                    <br />
                    <input type='text' placeholder='Enter Username' name='user_name' required />
                </div>
                <div className='form-options'>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password" placeholder="Enter Password" name="password" required />
                </div>
                <br />
                <button type="submit" className='myButton'>Log in</button>
                <br />
                <p>
                    Don't have an account? <br />
                    <Link to='/register'>Sign up</Link>
                </p>
            </form>
        </div>
    )
}
import React from 'react';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

export default class RegistrationPage extends React.Component {
    onRegisterSuccess = () => {
        this.props.history.push('/login');
    }
    render() {
        return (
            <section className="register-section">
                <h2>Register for a Happy Habit account!</h2>
                <RegistrationForm onRegisterSuccess={this.onRegisterSuccess} />
            </section>
        );
    }
}
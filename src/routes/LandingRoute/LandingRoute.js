import React from 'react';
import {Link} from 'react-router-dom';
import smartphone from '../../images/smartphone.png';
import activity from '../../images/activity.png';
import list from '../../images/list.png';
import './LandingRoute.css';
import UserContext from '../../contexts/UserContext';
import TokenService from '../../services/token-service';

export default class LandingRoute extends React.Component {
    static contextType = UserContext

    renderSignUpInfo() {
        return (
            <section className='landing-nav'>
                <h2 className='landing-title'>Sign up today</h2>
                    <Link to='/register' className='dashButton'>
                        Sign me up!
                    </Link>
                <h2 className='landing-title'>Want to try it out? Login as a demo user!</h2>
                    <p>Username: demo_user</p>
                    <p>Password: Password1!</p>
                    <Link to='/login' className='dashButton'>
                        Login
                    </Link>
            </section>
        );
    }

    renderGetStarted() {
        return (
            <section className='landing-nav'>
                <h2 className='landing-title'>Start keeping track of your coping methods now</h2>
                    <Link to='/entry' className='dashButton'>
                        Get started!
                    </Link>
            </section>
        );
    }

    render() {
    return (
        <div>
            <main>
                <section className='app-info'>
                    <div className='image'>
                        <img src={smartphone} alt='smartphone-icon' />
                    </div>
                    <div className='content'>
                        <h2 className='landing-title'>Happy Habit</h2>
                        <p>
                            Happy Habit is an emotional wellness app created to help you identify and quickly implement some of 
                            the healthy coping skills you already have at your disposal. 
                        </p>
                    </div>
                </section>
                <hr className='section'/>
                <section className='app-info'>
                    <div className='image'>
                        <img src={activity} alt='headstand-icon' />
                    </div>
                    <div className='content'>
                        <h2 className='landing-title'>Customize your coping methods</h2>
                        <p>
                            You can add personalized coping methods that help you in times of stress,
                            frustration, uncertantiy, saddness, or whatever else you may be feeling. 
                        </p>
                    </div>
                </section>
                <hr className='section'/>
                <section className='app-info'>
                    <div className='image'>
                        <img src={list} alt='list-icon' />
                    </div>
                    <div className='content'>
                        <h2 className='landing-title'>Keep track of which coping methods help you most</h2>
                        <p>
                            On your Dashboard, you can see a collection of all of the entries you have previously made. Including the 
                            specific activity you used, your mood before and after participating in the activity, and any notes you may have made
                            about your experience.  
                        </p>
                    </div>
                </section>
                <hr className='section'/>
                <div>
                    {TokenService.hasAuthToken()
                        ? this.renderGetStarted()
                        : this.renderSignUpInfo()
                    }
                </div>
            </main>
        </div>
    );
    }
}
import React from 'react'
// import DashboardItem from '../../components/DashboardItem/DashboardItem'
// import data from '../../json_src/json.json'

export default function LandingRoute() {
    return (
        <div>
            <main>
                <section className='heading'>
                    <h2>HappyHabit</h2>
                    <p>
                        HappyHabit is an emotional wellness app created to help you identify and quickly implement some of 
                        the healthy coping skills you already have at your disposal. 
                    </p>
                </section>
                <section className='app-info'>
                    <h2>Customize your coping exercises</h2>
                    <p>
                        You can choose a coping exercise from our pre-compiled list, or add other methods that help you in times of stress,
                        frustration, uncertantiy, saddness, or whatever else you may be feeling. 
                    </p>
                </section>
                <section className='app-info'>
                    <h2>Keep track of which coping methods help you most</h2>
                    <p>
                        On your Dashboard, you can see a collection of all of the entries you have previously made. Including the 
                        specific activity you used, your mood before and after participating in the activity, and any notes you may have made
                        about your experience.  
                    </p>
                </section>
            </main>
            {/* {data.data.map(element => <DashboardItem entry={element}/>)} */}
        </div>
    )
}
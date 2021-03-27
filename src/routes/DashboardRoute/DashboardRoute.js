import React from 'react'
import Entry from '../../components/Entry/Entry'
import EntryContext from '../../contexts/EntryContext'
import {Link} from 'react-router-dom'
import CrisisPlan from '../../components/CrisisPlan/CrisisPlan'
import './DashboardRoute.css'


class DashboardRoute extends React.Component {
    static contextType = EntryContext;

    render() {
        const {entry} = this.context;
        const entryMap = entry.map(entry => {
            return (
                <Entry
                    key={entry.id}
                    id={entry.id}
                    exercise={entry.exercise}
                    startMood={entry.start_mood}
                    endMood={entry.end_mood}
                    notes={entry.notes}
                    dateCreated={entry.date_created}
                    singleEntry={entry}
                />
            )
        });

        return (
            <div className='entry-list'>
                <h2 className='landing-title'>Welcome to Your Dashboard</h2>
                <p>
                    Here, you can view all of the entries you have made in the past 
                    to reflect on which coping exercises you have benefited from the most.    
                </p>
                {entryMap}
                <CrisisPlan />
                <Link to='/entry'>
                        <button className='landing-button'>Create a new entry!</button>
                </Link>
            </div>
        )
        
    }
}

export default DashboardRoute
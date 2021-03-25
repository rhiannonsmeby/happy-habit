import React from 'react'
import Entry from '../../components/Entry/Entry'
import EntryContext from '../../contexts/EntryContext'
import {Link} from 'react-router-dom'
import CrisisPlan from '../../components/CrisisPlan/CrisisPlan'


class DashboardRoute extends React.Component {
    static contextType = EntryContext;
    // state = {
    //     entries: [],
    // }

    // componentDidMount() {
    //     EntriesService.getUserEntries()
    //         .then(res => {
    //             this.setState({
    //                 entries: res.entry
    //             })
    //         })
    // }

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
        // const entriesToShow = this.state.entry.map((entries) => {
        //     return (
        //         <li key={entries.id} className='display-entries'>
        //             <p>{entries}</p>
        //         </li>
        //     )
        // })
        // return (
        //     <section>
        //         <p>Here is your Dashboard:</p>
        //         <ul>
        //             {entriesToShow}
        //         </ul>
        //     </section>
        // );
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
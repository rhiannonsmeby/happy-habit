import React from 'react'
import Entry from '../../components/Entry/Entry'
import EntryContext from '../../contexts/EntryContext'


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
                {entryMap}
            </div>
        )
        
    }
}

export default DashboardRoute
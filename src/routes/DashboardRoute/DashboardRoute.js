import React from 'react'
import EntriesService from '../../services/entries-service'

class DashboardRoute extends React.Component {
    state = {
        entries: [],
    }

    componentDidMount() {
        EntriesService.getAllEntries()
            .then(res => {
                this.setState({
                    entries: res.entries
                })
            })
    }

    render() {
        const entriesToShow = this.state.entries.map((entries) => {
            return (
                <li key={entries.id} className='display-entries'>
                    <p>{entries}</p>
                </li>
            )
        })
        return (
            <section>
                <p>Here is your Dashboard:</p>
                <ul>
                    {entriesToShow}
                </ul>
            </section>
        );
        
    }
}

export default DashboardRoute
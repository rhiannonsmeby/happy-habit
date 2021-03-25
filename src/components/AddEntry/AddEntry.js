import React from 'react'
import EntryContext from '../../contexts/EntryContext'
import {Link} from 'react-router-dom'

class AddEntry extends React.Component {
    static contextType = EntryContext;

    constructor(props) {
        super(props);
        this.state = {
            // assignedUser: '',
            entryExercise: '',
            entryStartMood: '',
            entryEndMood: '',
            entryNotes: '',
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        const { addEntry } = this.context;
        const date_created = new Date().toISOString

        fetch('http://localhost:8000/api/entry', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                // assignedUser: this.state.assignedUser,
                exercise: this.state.entryExercise,
                startMood: this.state.entryStartMood,
                endMood: this.state.entryEndMood,
                notes: this.state.entryNotes,
                dateCreated: date_created,
            }),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Could not post the entry. Please try again later')
                }
                return response.json();
            })
            .then(data => {
                addEntry(data);
                this.setState({
                    // assignedUser: '',
                    entryExercise: '',
                    entryStartMood: '',
                    entryEndMood: '',
                    entryNotes: ''
                })
                alert('Your entry has been posted!')
            })
            .catch(err => {
                alert(err);
            })
    }
    updateExercise(newExercise) {
        this.setState({
            entryExercise: newExercise
        })
    }
    updateStartMood(newStartMood) {
        this.setState({
            entryStartMood: newStartMood
        })
    }
    updateEndMood(newEndMood) {
        this.setState({
            entryEndMood: newEndMood
        })
    }
    updateNotes(newNote) {
        this.setState({
            entryNotes: newNote
        })
    }

    render() {
        return (
            <div className='AddEntry'>
                <form className='AddEntryForm' onSubmit={e => this.handleSubmit(e)}>
                    <fieldset>
                        <legend>Create a new entry!</legend>
                        <label htmlFor='startMood'>Mood:</label>
                        <br />
                        <input type='text' name='startMood' id='startMood'
                            value={this.state.entryStartMood}
                            onChange={e => this.updateStartMood(e.target.value)} />
                        <br />
                        <label htmlFor='exercise'>Coping exercise:</label>
                        <br />
                        <input type='text' name='exercise' id='exercise'
                            value={this.state.entryExercise}
                            onChange={e => this.updateExercise(e.target.value)} />
                        <br />
                        <label htmlFor='endMood'>Mood after completing your selected coping exercise:</label>
                        <br />
                        <input type='text' name='endMood' id='endMood'
                            value={this.state.entryEndMood}
                            onChange={e => this.updateEndMood(e.target.value)} />
                        <br />
                        <label htmlFor='notes'>Add notes (optional):</label>
                        <br />
                        <input type='text' name='notes' id='notes'
                            value={this.state.entryNotes}
                            onChange={e => this.updateNotes(e.target.value)} />
                        <br />
                        <button type='submit'
                            disabled={
                                !(this.state.entryStartMood.length > 0) ||
                                !(this.state.entryExercise.length > 0) ||
                                !(this.state.entryEndMood.length > 0)
                            }>
                                Add new entry
                        </button>
                    </fieldset>
                </form>
                <Link to='/dashboard'>
                        <button className='landing-button'>Cancel</button>
                </Link>
            </div>
        )
    }
}

export default AddEntry;
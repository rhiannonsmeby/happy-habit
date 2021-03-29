import React from 'react';
import EntryContext from '../../contexts/EntryContext';
import EntryApiService from '../../services/entry-api-service';
import {Link} from 'react-router-dom';
import './AddEntry.css';
import CrisisPlan from '../CrisisPlan/CrisisPlan';
import sad from '../../images/sad.png';
import sad1 from '../../images/sad1.png';
import surprised from '../../images/surprised.png';
import nervous from '../../images/nervous.png';
import kiss from '../../images/kiss.png';
import happy from '../../images/happy.png';
import happy1 from '../../images/happy1.png';
import calm from '../../images/calm.png';

class AddEntry extends React.Component {
    static contextType = EntryContext;

    constructor(props) {
        super(props);
        this.state = {
            entryExercise: '',
            entryStartMood: '',
            entryEndMood: '',
            entryNotes: '',
        };
    }


    //event handlers for posting an entry
    handleSubmit = e => {
        e.preventDefault();
        const { addEntry } = this.context;
        const date_created = new Date().toISOString;
        const newEntry = {
            exercise: this.state.entryExercise,
            start_mood: this.state.entryStartMood,
            end_mood: this.state.entryEndMood,
            notes: this.state.entryNotes,
            date_created: date_created,
        };
        EntryApiService.addEntry(newEntry)
            .then(data => {
                addEntry(data);
                this.setState({
                    entryExercise: '',
                    entryStartMood: '',
                    entryEndMood: '',
                    entryNotes: '',
                })
                alert('Your entry has been posted!')
            })
            .catch(err => {
                alert(err);
            })
    };
    updateExercise(newExercise) {
        this.setState({
            entryExercise: newExercise
        });
    };
    updateStartMood(newStartMood) {
        this.setState({
            entryStartMood: newStartMood
        });
    };
    updateEndMood(newEndMood) {
        this.setState({
            entryEndMood: newEndMood
        });
    };
    updateNotes(newNote) {
        this.setState({
            entryNotes: newNote
        });
    };

    render() {
        return (
            <div className='AddEntry'>
                <section className='entry-section'>
                    <h2>Create a New Entry!</h2>
                    <p>In the space below you can log your chosen coping method and your mood before and after completing it, along with some notes about your experience- or not! It's up to you!</p>
                <form className='AddEntryForm' onSubmit={e => this.handleSubmit(e)}>
                    <fieldset>
                        <legend>Entry</legend>
                        <label htmlFor='startMood'>Log your mood:</label>
                        <br />
                        <div className='mood-options'>
                            <label htmlFor='1'>
                                <input type='radio' name='mood1' id='1'
                                    value={1}
                                    onChange={e => this.updateStartMood(e.target.value)}/>
                                <img src={sad1} alt='very sad' />
                            </label>
                            <label htmlFor='2'>
                                <input type='radio' name='mood1' id='2'
                                    value={2}
                                    onChange={e => this.updateStartMood(e.target.value)}/>
                                <img src={sad} alt='sad' />
                            </label>
                            <label htmlFor='3'>
                                <input type='radio' name='mood1' id='3'
                                    value={3}
                                    onChange={e => this.updateStartMood(e.target.value)}/>
                                <img src={nervous} alt='frustrated' />
                           </label>
                           <label htmlFor='4'>
                                <input type='radio' name='mood1' id='4'
                                    value={4}
                                    onChange={e => this.updateStartMood(e.target.value)}/>
                                <img src={calm} alt='fine' />
                            </label>
                            <label htmlFor='5'>
                                <input type='radio' name='mood1' id='5'
                                    value={5}
                                    onChange={e => this.updateStartMood(e.target.value)}/>
                                <img src={surprised} alt='calm/ surprised' />
                            </label>
                            <label htmlFor='6'>
                                <input type='radio' name='mood1' id='6'
                                    value={6}
                                    onChange={e => this.updateStartMood(e.target.value)}/>
                                <img src={kiss} alt='loving' />
                            </label>
                            <label htmlFor='7'>
                                <input type='radio' name='mood1' id='7'
                                    value={7}
                                    onChange={e => this.updateStartMood(e.target.value)}/>
                                <img src={happy} alt='happy' />
                            </label>
                            <label htmlFor='8'>
                                <input type='radio' name='mood1' id='8'
                                    value={8}
                                    onChange={e => this.updateStartMood(e.target.value)}/>
                                <img src={happy1} alt='very happy' />
                            </label>
                        </div>
                        <br />
                        <label htmlFor='exercise'>Input the coping exercise you're going to use:</label>
                        <br />
                        <input type='text' name='exercise' id='exercise'
                            value={this.state.entryExercise}
                            onChange={e => this.updateExercise(e.target.value)} />
                        <br />
                        <label htmlFor='endMood'>Log your mood after completing your coping exercise:</label>
                        <br />
                        <div className='mood-options2'>
                            <label htmlFor='9'>
                                <input type='radio' name='mood2' id='9'
                                    value={1}
                                    onChange={e => this.updateEndMood(e.target.value)}/>
                                <img src={sad1} alt='very sad' />
                            </label>
                            <label htmlFor='10'>
                                <input type='radio' name='mood2' id='10'
                                    value={2}
                                    onChange={e => this.updateEndMood(e.target.value)}/>
                                <img src={sad} alt='sad' />
                            </label>
                            <label htmlFor='11'>
                                <input type='radio' name='mood2' id='11'
                                    value={3}
                                    onChange={e => this.updateEndMood(e.target.value)}/>
                                <img src={nervous} alt='frustrated' />
                           </label>
                           <label htmlFor='12'>
                                <input type='radio' name='mood2' id='12'
                                    value={4}
                                    onChange={e => this.updateEndMood(e.target.value)}/>
                                <img src={calm} alt='fine' />
                            </label>
                            <label htmlFor='13'>
                                <input type='radio' name='mood2' id='13'
                                    value={5}
                                    onChange={e => this.updateEndMood(e.target.value)}/>
                                <img src={surprised} alt='calm/ surprised' />
                            </label>
                            <label htmlFor='14'>
                                <input type='radio' name='mood2' id='14'
                                    value={6}
                                    onChange={e => this.updateEndMood(e.target.value)}/>
                                <img src={kiss} alt='loving' />
                            </label>
                            <label htmlFor='15'>
                                <input type='radio' name='mood2' id='15'
                                    value={7}
                                    onChange={e => this.updateEndMood(e.target.value)}/>
                                <img src={happy} alt='happy' />
                            </label>
                            <label htmlFor='16'>
                                <input type='radio' name='mood2' id='16'
                                    value={8}
                                    onChange={e => this.updateEndMood(e.target.value)}/>
                                <img src={happy1} alt='very happy' />
                            </label>
                        </div>
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
                        <button className='landing-button'>View Dashboard</button>
                </Link>
                </section>
                <div className='crisis-plan'>
                <CrisisPlan />
                </div>
            </div>
        )
    }
}

export default AddEntry;
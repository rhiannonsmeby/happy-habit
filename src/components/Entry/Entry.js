import React from 'react';
import PropTypes from 'prop-types';
import EntryContext from '../../contexts/EntryContext';
import EntryApiService from '../../services/entry-api-service';
import './Entry.css';

export default class Entry extends React.Component {
    static contextType = EntryContext
    constructor() {
        super();
        this.state = {
            isShow: false
        }
        this.renderNotes = this.renderNotes.bind(this);
      };
      
    deleteButton = (e) => {
        e.stopPropagation();
        const {deleteItem} = this.context;
        EntryApiService.deleteEntry(this.props.id)
            .then(() => {
                deleteItem(this.props.id)
            })
            .catch(err => {
                alert(err)
            })
    }

    renderNotes() {
        this.setState(state => ({
            isShow: !state.isShow
        }));
    };

    render() {
        let date = new Date(this.props.dateCreated);
        let formatDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

        return (
            <div className='entry'>
                    <p className='entry-title'>Coping Exercise:</p>
                    <button className='expand-entry' onClick={this.renderNotes}>
                        <h2 className='entry-title'>{this.props.exercise}</h2>
                    </button>
                {this.state.isShow && <p>Notes: {this.props.notes}</p>}
                <div className='entry-details'>
                    <p>Mood Before: {this.props.startMood}</p>
                    <p>Mood After: {this.props.endMood}</p>
                    <p>Date Created: {formatDate}</p>
                    <button onClick={this.deleteButton}>
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}

Entry.propTypes = {
    id: PropTypes
        .number,
    dateCreated: PropTypes
        .string,
    exercise: PropTypes
        .string,
}
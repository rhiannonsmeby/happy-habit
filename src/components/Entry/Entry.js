import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import EntryContext from '../../contexts/EntryContext'
import './Entry.css'

export default class Entry extends React.Component {
    static contextType = EntryContext
    constructor() {
        super();
        this.state = {
            isShow: false
        }
        this.renderNotes = this.renderNotes.bind(this);
      }

    deleteButton = (e) => {
        e.stopPropagation();
        const {deleteItem} = this.context;
        fetch(`http://localhost:8000/api/entry/${this.props.id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
            .then(response => {
                if(!response.ok) {
                    throw new Error('There was an error in deletion')
                }
                return response
            })
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
        }))
    }

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
                    <p>Before: {this.props.startMood}</p>
                    <p>After: {this.props.endMood}</p>
                    <p>Date Created: {formatDate}</p>
                    <button onClick={this.deleteButton}>
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

Entry.propTypes = {
    id: PropTypes
        .number
        .isRequired,
    dateCreated: PropTypes
        .string
        .isRequired,
    exercise: PropTypes
        .string
        .isRequired,
}
import React from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import EntryContext from '../../contexts/EntryContext';

export default class Entry extends React.Component {
    static contextType = EntryContext

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

    render() {
        let date = new Date(this.props.dateCreated);
        let formatDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

        return (
            <div className='entry'>
                <Link to={`/entry/${this.props.id}`}>
                    <h2>{this.props.exercise}</h2>
                    <p>{this.props.id}</p>
                </Link>
                <div className='entry-details'>
                    <p>
                        Date Created: {formatDate}
                    </p>
                    <p>{this.props.exercise}</p>
                    <p>{this.props.startMood}</p>
                    <p>{this.props.endMood}</p>
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
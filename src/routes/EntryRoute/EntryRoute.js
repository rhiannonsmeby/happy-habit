import React from 'react'
import AddEntry from '../../components/AddEntry/AddEntry'

export default class Entry extends React.Component {
    render() {
        return (
            <div className='create-entry'>
                <AddEntry />
            </div>
        )
    }
}
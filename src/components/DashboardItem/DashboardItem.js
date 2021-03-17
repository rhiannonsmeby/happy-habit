import React from 'react'


export default class DashboardItem extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.entry.activity}</p>
                <p>{this.props.entry.mood1}</p>
                <p>{this.props.entry.mood2}</p>
                <p>{this.props.entry.reflection}</p>
            </div>
        )
    }
}
import React from 'react'

const EntryContext = React.createContext ({
    entry: [],
    error: null,
    setError: () => { },
    clearError: () => { },
    addEntry: () => { },
    deleteItem: () => { },
    clickItem: () => { },
})

export default EntryContext

export class EntryProvider extends React.Component {
    state = {
        main: {},
        entry: [],
        error: null,
    }

    setError = error => {
        console.error(error)
        this.setState({error})
    }

    clearError = () => {
        this.setState({error: null})
    }


    // setEntry = main => {
    //     this.setState({main, entry: main.entry})
    // }

    // clearEntry = () => {
    //     this.setState({entry: {}})
    // }

    render() {
        const value = {
            main: this.state.main,
            error: this.state.error,
            entry: this.state.entry
        }
        return (
            <EntryContext.Provider value={value}>
                {this.props.children}
            </EntryContext.Provider>
        )
    }
}
import React from 'react'

const Context = React.createContext({
    entries: [],
    setEntries: () => {},
})

Context.displayName = 'Context'

export default Context;
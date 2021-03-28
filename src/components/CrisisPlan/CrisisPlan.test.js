import React from 'react'
import ReactDOM from 'react-dom'
import CrisisPlan from './CrisisPlan'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <CrisisPlan />, div);
        ReactDOM.unmountComponentAtNode(div);
});
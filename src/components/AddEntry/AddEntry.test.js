import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import AddEntry from './AddEntry'

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <AddEntry />
        </BrowserRouter>, div);
        ReactDOM.unmountComponentAtNode(div);
});
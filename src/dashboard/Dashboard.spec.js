// Test away!
import React from 'react';
import { render } from 'react';
import Dashboard from './Dashboard'
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
afterEach(rtl.cleanup);

describe('Dashboard', () => {
    it('renders dashboard correct', () => {
        const wrapper = rtl.render(<Dashboard/>);
        expect(wrapper.baseElement).toMatchSnapshot();
    })
})

describe('Dashboard', () => {
    it('checks if the Dashboard is closed and locked', () => {
        const { getByText } = rtl.render(<Dashboard/>);
        getByText(/lock gate/i);
        getByText(/close gate/i); 
    })
})

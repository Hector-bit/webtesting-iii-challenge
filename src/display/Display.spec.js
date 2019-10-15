// Test away!
import React from 'react';
import { render } from 'react';
import Display from './Display'
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
afterEach(rtl.cleanup);

describe('Display', () => {
    it('renders Display correct', () => {
        const wrapper = rtl.render(<Display/>);
        expect(wrapper.baseElement).toMatchSnapshot();
    })
})

describe('Display', () => {
    it('checks if defaults to unlocked and open', () => {
        const { getByText } = rtl.render(<Display/>);
        getByText(/unlocked/i);
        getByText(/open/i);
    })

    // it('states if the gate is closed and locked', () => {
    //     const { getByText } = rtl.render(<Display/>);
    //     getByText(/locked/i);
    //     getByText(/closed/i);
    // })
})

// describe('Display', () => {
//     it('checks if the display is closed and locked', () => {
//         const { getByText } = rtl.render(<Display/>);
//         getByText(/Locked/i);
//         getByText(/closed/i); 
//     })
// })
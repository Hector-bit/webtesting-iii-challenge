// Test away!

import React from 'react';
import Display from './Display';
import { render } from 'react-testing-library';

describe('<Display/>', () => {
    it('render without crashing', () => {
        render(<Display/>);
    })

    it('display shows open - green and unlocked- green when gate is open and unlocked', () => {
        const display = render(<Display closed={false} locked={false}/>);
        const lockState = display.getByText('Unlocked');
        const openState = display.getByText('Open');
        expect(lockState.className).toBe('led green-led');
        expect(openState.className).toBe('led green-led');
        
    })
})



// import React from 'react';
// import { render } from 'react';
// import Display from './Display'
// import * as rtl from 'react-testing-library';
// import 'jest-dom/extend-expect';
// afterEach(rtl.cleanup);

// describe('Display', () => {
//     it('renders Display correct', () => {
//         const wrapper = rtl.render(<Display/>);
//         expect(wrapper.baseElement).toMatchSnapshot();
//     })
// })

// describe('Display', () => {
//     it('checks if defaults to unlocked and open', () => {
//         const { getByText } = rtl.render(<Display/>);
//         getByText(/unlocked/i);
//         getByText(/open/i);
//     })

//     // it('states if the gate is closed and locked', () => {
//     //     const { getByText } = rtl.render(<Display/>);
//     //     getByText(/locked/i);
//     //     getByText(/closed/i);
//     // })
// })

// describe('Display', () => {
//     it('checks if the display is closed and locked', () => {
//         const { getByText } = rtl.render(<Display/>);
//         getByText(/Locked/i);
//         getByText(/closed/i); 
//     })
// })
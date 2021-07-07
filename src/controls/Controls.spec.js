// Test away!
import React from 'react';
import { render } from 'react';
import Controls from './Controls'
import * as rtl from 'react-testing-library';
import 'jest-dom/extend-expect';
afterEach(rtl.cleanup);

describe('Control', () => {
    it('renders control correct', () => {
        const wrapper = rtl.render(<Controls/>);
        expect(wrapper.baseElement).toMatchSnapshot();
    })
})

// describe('checks status of gate', () => {
//     it('states if the gate is open and unlocked', () => {
//         // const wrapper = rtl.render(<App/>);
//         // const button = wrapper.getBy('button')
//         // expect(wrapper.queryByText(/success/i)).not.toBeInTheDocument();
//         // rtl.fireEvent.click(button);
//         // expect(wrapper.findByText(/success/i));
//         const { getByText } = rtl.render(<Controls/>);
//         getByText(/unlocked/i);
//         getByText(/open/i);
//     })
// })

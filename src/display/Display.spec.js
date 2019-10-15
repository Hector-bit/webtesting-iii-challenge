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

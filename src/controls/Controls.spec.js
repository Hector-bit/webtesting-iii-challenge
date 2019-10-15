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


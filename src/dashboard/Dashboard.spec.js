// Test away!
import React from 'react';
// import { render } from 'react';
import Dashboard from './Dashboard'
import * as rtl from 'react-testing-library';
// import 'jest-dom/extend-expect';
import { render, fireEvent } from 'react-testing-library';
afterEach(rtl.cleanup);

describe('Dashboard', () => {
    it('renders dashboard correct', () => {
        const wrapper = rtl.render(<Dashboard/>);
        expect(wrapper.baseElement).toMatchSnapshot();
    })

    it('default state is unlocked and open', () => {
        const dashboard = render(<Dashboard/>);

        const lockBtn = dashboard.getByText('Lock Gate');
        const closeBtn = dashboard.getByText('Close Gate');

        expect(lockBtn.disabled).toBe(true);
        expect(closeBtn.disabled).toBe(false);
    })

    it('close gat to enable lcok btn', () => {
        const dashboard = render(<Dashboard/>);
        const closeBtn = dashboard.getByText('Close gate');

        fireEvent.click(closeBtn);

        const openBtn = dashboard.getByText('Open Gate');
        const lockBtn = dashboard.getByText('Lock Gate');
        expect(openBtn.disabled).toBe(false);
        expect(lockBtn.disabled).toBe(false);

    })

    it('locks gate to disable open btn and enable unlocked', () => {
        const dashboard = render(<Dashboard/>);

        const closeBtn = dashboard.getByText('Close gate');
        fireEvent.click(closeBtn);

        const lockBtn = dashboard.getByText('Lock gate');
        fireEvent.click(lockBtn);

        const openBtn = dashboard.getByText('Open Gate');
        const unlockBtn = dashboard.getByText('Unlock Gate');
        expect(openBtn.disabled).toBe(true);
        expect(unlockBtn.disabled).toBe(false);
    })
})

// describe('Dashboard', () => {
//     it('checks if the Dashboard is closed and locked', () => {
//         const { getByText } = rtl.render(<Dashboard/>);
//         getByText(/lock gate/i);
//         getByText(/close gate/i); 
//     })
// })

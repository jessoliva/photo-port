// We need react to enable the components to function properly so we can test them
import React from 'react';

// retrieve functions from the React Testing Library
import { render, cleanup } from '@testing-library/react';
// The render function will do just what its name implies: "render" the component. 
//  What actually happens is that Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered)

// import the extend-expect library from the jest-dom package
import '@testing-library/jest-dom/extend-expect';
// jest-dom offers access to custom matchers that are used to test DOM elements

// import the component we will be testing
import About from '..';
//
// DONE IMPORTING

// CONFIGURE TESTING ENVIRONMENT
//
// we'll call the cleanup function using the afterEach global function from Jest
afterEach(cleanup);
// This will ensure that after each test, we won't have any leftover memory data that could give us false results.

// we'll use the describe function to declare the component we're testing, 
describe('About component', () => {
    // First Test
    // first test will be the baseline to verify that the component is rendering≈
    it('renders', () => {
        render(<About />);
    });
    // it function
    // 1st arg --> a string declares what is being --> Alternatively, test can also be used interchangeably with it to create a test
    // 2nd arg --> a callback function runs the test --> This is where we'll use the render function to render the About component using JSX.

    // Second Test
    // describe
    // 'test case' --> we'll compare snapshot versions of the DOM node structure
    // a snapshot is a serialized version of the DOM node structure enabled by Jest
    // asFragment function returns a snapshot of the About component
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        // test and compare whether the expected and actual outcomes match. Use the expect function with a matcher to assert something about a value. In the following statement, we'll use the toMatchSnapshot matcher to assert that snapshots will match
        expect(asFragment()).toMatchSnapshot();
    });
    // this test creates __snapshots__/index.test.js.snap
    // The index.test.js.snap file is a serialized version of the component's node structure, which includes elements, attributes, and text content. This file, stored in the __snapshots__ folder, will serve as the base model of the component's structure, and will be compared against new snapshots that are created by the asFragment function
    // When changes are made to a component's element, such as a change in text content, button label, or attribute, it will cause the stored snapshot to become stale. A new snapshot can be written at the command line that contains the instance of the test runner by typing u to update, or rewrite, a new snapshot
})
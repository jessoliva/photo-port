// packages needed to test nav component
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContactSelected = jest.fn();
const mockSetContactSelected = jest.fn();

// Configure the Testing Environment
afterEach(cleanup);

// describe function to declare what this test suite will be testing
describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
    });    
   
    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);
        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
    // use the expect function and the matcher, .toMatchSnapshot(), to write our snapshot assertion
})

// Not only can we test if the component renders, but we can only test for individual elements. This is an important feature when we wish to verify if important elements are visible. For instance in the next test, we'll check to see if the emoji, 📸, is visible.

// create a test for emoji visibility
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // Arrange
        const { getByLabelText } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);

        // Assert
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})
// Note that the describe function is not absolutely necessary for the test to run; it is used to organize tests into sections that are typically labeled with the element being tested.
  
// create a test for the link visibility
describe('links are visible', () => {
    it('inserts text into the links', () => {
        // Arrange
        const { getByTestId } = render(<Nav
            categories={categories}
            setCurrentCategory={mockSetCurrentCategory}
            currentCategory={mockCurrentCategory}
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
        />);

        // Assert
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    });
    // 2 expect statements but it still one test
    // each it function is associated with a single test case.
})
// we'll verify that the text content is being inserted into the <a> tags (i.e., that the links are visible to users). To make sure that the correct elements are tested, we'll use the getByTestId method.
// Similar to an id attribute, we will add a data-testid to the <a> element. Also similar to the getElementById DOM method, we will use the getByTestId method to return the DOM element.
// The reason we'll use a separate data-testid attribute specific for testing purposes instead of using the id attribute is the same as why we don't query an element by its class: to follow the best-practice principle of separating concerns. The class and id attributes are used for CSS and JavaScript selection. In the case of a change in styling, we wouldn't want to break tests as a side effect of an unrelated change.


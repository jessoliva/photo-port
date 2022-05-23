import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Modal from '../'

afterEach(cleanup)

const mockToggleModal = jest.fn();

// declare a constant,currentPhoto, that's assigned one element of hardcoded values from the PhotoList array photos. Remember to include the index: 1 value in this object, because it is necessary to render the image in the modal
const currentPhoto = {
    name: 'Park bench',
    category: 'landscape',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    index: 1
};
  
describe('Modal component', () => {

    // use the standard baseline test to render the component
    // Use the mocked function and the currentPhoto to render the <Modal>
    it('renders', () => {
        render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
    })
  
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);
    
        expect(asFragment()).toMatchSnapshot();
    });
})
  
describe('Click Event', () => {
    it('calls onClose handler', () => {
        // Arrange: Render Modal
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
        />);

        // Act: Simulate user click event
        fireEvent.click(getByText('Close this modal'))
    
        // Assert: Expected matcher
        // This statement declares that the click handling function, mockToggleModal, will have been called one time
        expect(mockToggleModal).toHaveBeenCalledTimes(1);
    });
})  
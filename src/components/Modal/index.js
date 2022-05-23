import React from 'react';

// closing the modal will fall to the child component, the Modal

// Destructure props into currentPhoto in the Modal parameter
function Modal({ onClose, currentPhoto }) {

    // Then destructure currentPhoto properties into constants to assign their values into the modal
    const {name, category, description, index} = currentPhoto;

    return (
        // JSX
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category" />
                <p>{description}</p>
                <button onClick={onClose} type="button">Close this modal</button>
                {/* assign the onClose function to a click event listener on the <button> element */}
            </div>
        </div>
    );
};
  
export default Modal;

// The list of photos is rendered in the PhotoList component, so this is the logical place for the modal to open and for us to access the individual photo data
// We'll establish the Photolist as the parent component and the Modal as the child component, because the Modal is located in PhotoList
// child component of the Gallery component that will now handle the photo rendering logic

import React, { useState }  from 'react'
import Modal from '../Modal';

// props.category value has been passed down from Gallery as currentCategory.name --> so destructure props and use { category }
// As the parent modal, the PhotoList controlled the opening of the modal

const PhotoList = ({ category }) => {

    const [photos] = useState([
        {
          name: 'Grocery aisle',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Grocery booth',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Building exterior',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Restaurant table',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Cafe interior',
          category: 'commercial',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Cat green eyes',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Green parrot',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Yellow macaw',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Pug smile',
          category: 'portraits',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Pancakes',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Burrito',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Scallop pasta',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Burger',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Fruit bowl',
          category: 'food',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Green river',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Docks',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Panoramic village by sea',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Domestic landscape',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
        {
          name: 'Park bench',
          category: 'landscape',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
        },
    ]);

    // create a new array to hold the photos that match the category passed in from Gallery
    // We're going through each photo in the photos array, trying to find every photo that matches the category that was selected by the user. If a photo matches the condition, it is returned in an array and assigned to currentPhotos
    const currentPhotos = photos.filter((photo) => photo.category === category);
    // Then we can map the currentPhotos array to render each photo that matches the category selected by the user.
    // with this new array, the index i below works!

    // .map(function(element, index))

	// We'll use the useState Hook in the PhotoList component to manage the current photo state and make this data accessible to the Modal component through props
	const [currentPhoto, setCurrentPhoto] = useState();

    // create another Hook that manages whether the modal is open or not
    // In this expression, we set the initial state of isModalOpen to false, because we don't want the modal to open until a user has clicked on an image
    const [isModalOpen, setIsModalOpen] = useState(false);

	// Here we updated the current photo state using the setCurrentPhoto function with the data retrieved through the click event
	// Notice how we used the spread operator here to add the index: i key value pair to the current photo state. Because currentPhoto now contains the two critical data points needed for the modal, we can pass in currentPhoto as a prop to the Modal
	const toggleModal = (image, i) => {
		// current photo
		// Using the setCurrentPhoto setter function, let's set the current photo state in the toggleModal function
		setCurrentPhoto({...image, index: i});

		// when a user clicks on an image, make this true to show the modal
		setIsModalOpen(!isModalOpen); // initially set to false
	}

    return (
        <div>
			{/* conditional saying if isModalOpen true, then render modal */}
			{/* pass toggleModal function down as a prop to Modal, allowing us to toggle the state of the modal */}
			{/* the onClose identifier was assigned the function toggleModal --> onClose is the new prop being passed down to the Modal component */}
            {isModalOpen && <Modal currentPhoto={currentPhoto} onClose={toggleModal} />}
            <div className="flex-row">
                {currentPhotos.map((image, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        // OLD src={require(`../../assets/small/${category}/${i}.jpg`).default}
                        // removed .default so that images can actually display..
                        alt={image.name}
                        className="img-thumbnail mx-1"
                        key={image.name}
						onClick={() => toggleModal(image, i)}
                    />
                ))}
            </div>
        </div>
    )
}

export default PhotoList;

// The alt attribute is used for accessibility user-assistance devices, such as screen readers, so the image's name was assigned
// The key attribute was also assigned the image's name. This attribute value must be a unique string. The absence of this unique key value will cause an error message. For more information about using the key attribute, refer to the React documentation on lists and keys (Links to an external site.).
// src was assigned the require expression. Though this isn't a common practice, it certainly has its use cases! We were also able to take advantage of the incremental naming of the images by using i.
// The default property is where the image has been saved. To render the image, the default property must be invoked.

// MODAL INFO
	// To obtain that data, we'll attach a click event to the images rendered in the PhotoList component
	// In React, we'll use the onClick attribute and assign a click handler function to capture the individual photo data
	// We passed in the current image and i as arguments
		// The image object represents the element in the photos array, and the i will render the image as we did previously in the src attribute with the require function
	// The two critical data points needed for the modal to render are the image and the index, i
		// Let's pass the image and index data as props—to allow the modal to render the image
// Currently, we have a state called isModalOpen in the PhotoList component. We'll need to pass down this state as a prop to the Modal component, so that it can be updated when the modal is closed.
	


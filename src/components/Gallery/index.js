import React from 'react';
import PhotoList from '../PhotoList';
// helper to capitalize name value when it's rendered
import { capitalizeFirstLetter } from '../../utils/helpers';

function Gallery({ currentCategory }) {

    // destructure name and description properties from currentCategory
    // which is sent in from App.js
    const { name, description } = currentCategory;

    return (
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <PhotoList category={currentCategory.name} />
            {/* use some prop drilling and pass down the currentCategory.name as a prop into the Photolist component from Gallery */}
        </section>
    );
}
export default Gallery;
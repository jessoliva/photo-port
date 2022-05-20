// this is in the module, but was not originally in this file, is it not needed?
import React, { useState } from 'react'; 
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';

// You need to import React in every component file with `import Reach from 'react';`
// You can also import any images or CSS you want to use at the top.

// this function returns a language called JSX that can represent HTML in JavaScript
// Think of functions that return JSX as functions that use document.createElement(JSX). In fact, the way React uses JSX behind the scenes is very similar to document.createElement()
// using webpack and React here
function App() {

    // send this state to the Nav component as props
    // start by initializing the category state as an array of a few objects
    // This could be just a regular array, rather than an array inside useState, but we chose to use the useState hook here so that we can have the option to change the categories at some point in the future
    // It is completely fine to use useState without a setter, but keep in mind that it offers no advantages over just creating a variable within the component
    const [categories] = useState([
        {
          name: 'commercial',
          description: 'Photos of grocery stores, food trucks, and other commercial projects',
        },
        { name: 'portraits', description: 'Portraits of people in my life' },
        { name: 'food', description: 'Delicious delicacies' },
        { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);

    return (
        <div>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
            ></Nav>
            <main>
                <Gallery />  
                <About />  
                {/* this is a component */}
                {/* same as <About></About> */}
            </main>
        </div>
    );
}

export default App;

// This App.js file is the center of the application
// Think of App.js as the root component, or the wrapper component that houses all of the other components
// To effect any change on the application, we need to either modify this file or add components inside it

// React components follow the PascalCase naming convention. Knowing this will help you quickly identify whether a function is a component or just a regular function
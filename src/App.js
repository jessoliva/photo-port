// this is in the module, but was not originally in this file, is it not needed?
import React from 'react'; 
import Nav from './components/Nav';
import About from './components/About';
// You need to import React in every component file with `import Reach from 'react';`
// You can also import any images or CSS you want to use at the top.

// this function returns a language called JSX that can represent HTML in JavaScript
// Think of functions that return JSX as functions that use document.createElement(JSX). In fact, the way React uses JSX behind the scenes is very similar to document.createElement()
// using webpack and React here
function App() {
    return (
        <div>
            <Nav />
            <main>
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
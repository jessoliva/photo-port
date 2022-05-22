// this file is the root component that's responsible for how the React components currently render
import React, { useState } from 'react'; 
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact'; // has to match the export name in the index.js file

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
    // Passing the getter and setter functions into the Nav component will allow this component to modify the state in the App component, which will conditionally render based on the user's selection

    // to render ContactForm component conditionally
    // we set the initial value of contactSelected to false. This is to prevent the contact form from showing when a user initially navigates to the homepage. The Gallery will display instead
    const [contactSelected, setContactSelected] = useState(false);

    return (
        <div>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                currentCategory={currentCategory}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            ></Nav>
            <main>
                {/*  if the contactSelected is false, the Gallery and About components should be rendered, but if contactedSelected is true, the ContactForm component should be rendered */}
                {!contactSelected ? (
                    <>
                        <Gallery currentCategory={currentCategory}></Gallery>
                        <About></About>
                        {/* this is a component same as <About></About> */}
                    </>
                ) : (
                    <ContactForm></ContactForm>
                )}

                {/* same as */}
                {/* if(!contactSelected) {
                    <>
                        <Gallery currentCategory={currentCategory}></Gallery>
                        <About></About>
                    </> 
                } else {
                    <ContactForm></ContactForm>
                } */}
            </main>
        </div>
    );
}

export default App;

// This App.js file is the center of the application
// Think of App.js as the root component, or the wrapper component that houses all of the other components
// To effect any change on the application, we need to either modify this file or add components inside it

// React components follow the PascalCase naming convention. Knowing this will help you quickly identify whether a function is a component or just a regular function

// IF ELSE IN REACT
    // The shorthand condition is called a ternary operator, identified with the ? and : symbols. The ternary operator is a popular pattern in React to enable conditional rendering, similar to how we used the && operator as a short circuit. With the ternary, though, we supply the false condition to render as well.

// <> and </> that wrap the Gallery and About components
    // They are called React fragments—a shorthand abbreviation for <React.Fragment></React.Fragment>
    // allow multiple elements to be grouped together
    //  Although in JSX you can only return a single parent element, this rule can be satisfied by wrapping the children components in a React fragment. This also allows you to wrap elements without creating extra DOM nodes, like wrapping with a <div> would do
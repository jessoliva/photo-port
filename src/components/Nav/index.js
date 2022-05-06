import React from 'react';

function Nav() {

    // instead of reusing the code, write an array and map through the array to display each item in nav
    const categories = [
        {
          name: "commercial",
          description:
            "Photos of grocery stores, food trucks, and other commercial projects",
        },
        { name: "portraits", description: "Portraits of people in my life" },
        { name: "food", description: "Delicious delicacies" },
        {
          name: "landscape",
          description: "Fields, farmhouses, waterfalls, and the beauty of nature",
        },
    ];

    function categorySelected(name) {
        console.log(`${name} clicked`);
    };
      

    return (
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                        About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {/* map through the category array */}
                    {/* We've seen object keys and primary/foreign keys used to uniquely identify properties or items in a database */}
                    {categories.map((category) => (
                        <li className="mx-1" key={category.name}>
                            <span onClick={() => categorySelected(category.name)}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}
export default Nav;

// Whenever we map over anything in JSX, the outermost element must have a key attribute that's set to be something unique. This helps React keep track of items in the virtual DOM
// In this case, we used category.name because we don't expect any categories to share the same name. Often the key will be an id
// Note also the use of parentheses in the map callback to return JSX. When you map over an array in a JSX expression, you should return only a single JSX element—like how you can only return a single element from a React component.

// use built in onClick() function

// The onClick() attribute is expecting a callback function declaration. It's important that we wrap it in a function declaration rather than just calling categorySelected(category.name), which would cause the function to get called whenever the component renders as well

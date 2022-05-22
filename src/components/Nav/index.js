import React, { useEffect } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav(props) {

    // sent in from App.js file
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    // do this instead of simply document.title = currentCategory
    // bc we need a Hook to re-render the page
    // use a Hook to trigger a re-render on a variable value change
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);
    // 1st arg --> callback function
    // 2nd arg --> directs the hook to re-render the component on changes to the value of this state --> in other words, if currentCategory changes now, the component will re-render so that the change in document.title will be reflected

    return (
        <header className="flex-row px-1">
          <h2>
            <a data-testid="link" href="/">
              <span role="img" aria-label="camera">
                {" "}
                📸
              </span>{" "}
              Oh Snap!
            </a>
          </h2>
          <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                    About me
                    </a>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    {/* If the value of contactSelected is true, which means that the user selected Contact, we want to add the CSS class navActive, which will illuminate the background. We'll use the && operator as a short circuit */}
                    {/* Note the addition of the { } to contain the JavaScript expression, as well as the template literal to interpolate the JavaScript statement. */}
                    <span onClick={() => setContactSelected(true)}>Contact</span>
                </li>

                {categories.map((category) => (
                    <li className={`mx-1 ${currentCategory.name === category.name && !contactSelected && 'navActive'}`} key={category.name}>
                    {/*  means that currentCategory.name === category.name will get evaluated, and as long as it is true, then the second bit of the short circuit, navActive, will be returned */}
                    {/* the navActive class value is assigned only if Contact hasn't been selected and the current category HAS been selected */}
                        
                    <span onClick={() => {
                        setCurrentCategory(category);
                        setContactSelected(false);
                        }}
                    >
                        {capitalizeFirstLetter(category.name)}
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

// OLD CODE WITHOUT STATE
    // instead of reusing the code, write an array and map through the array to display each item in nav
    // const categories = [
    //     {
    //       name: "commercial",
    //       description:
    //         "Photos of grocery stores, food trucks, and other commercial projects",
    //     },
    //     { name: "portraits", description: "Portraits of people in my life" },
    //     { name: "food", description: "Delicious delicacies" },
    //     {
    //       name: "landscape",
    //       description: "Fields, farmhouses, waterfalls, and the beauty of nature",
    //     },
    // ];

    // function categorySelected(name) {
    //     console.log(`${name} clicked`);
    // };

    // return (
    //     <header>
    //         <h2>
    //             <a data-testid="link" href="/">
    //                 <span role="img" aria-label="camera"> 📸</span> Oh Snap!
    //             </a>
    //         </h2>
    //         <nav>
    //             <ul className="flex-row">
    //                 <li className="mx-2">
    //                     <a data-testid="about" href="#about">
    //                     About me
    //                     </a>
    //                 </li>
    //                 <li>
    //                     <span>Contact</span>
    //                 </li>
    //                 {/* map through the category array */}
    //                 {/* We've seen object keys and primary/foreign keys used to uniquely identify properties or items in a database */}
    //                 {categories.map((category) => (
    //                     <li className="mx-1" key={category.name}>
    //                         <span onClick={() => categorySelected(category.name)}>
    //                             {category.name}
    //                         </span>
    //                     </li>
    //                 ))}
    //             </ul>
    //         </nav>
    //     </header>
    // );
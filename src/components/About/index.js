import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
    return (
        <section className="my-5">
            <h1 id="about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            {/* You can use the {} syntax in JSX to use JavaScript */}
            <div className="my-2">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.
                </p>
            </div>
        </section>
    );
}
// use className instead of class bc class is already a keyword in JS

export default About;

// this is a component
// a component is a piece of code that can be used to create a React element
// it is imported and used in the App.js file
// React components must always return a single parent JSX element. However, this element may have many children elements. 
// this won't work bc you're returning 2 parent elements
// return (
//     <section>
//          <h1 id="about">Who am I?</h1>
//     </section>
//     <div>
//     </div>
//  );

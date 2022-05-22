import React, { useState }  from 'react';

function ContactForm() {

    // hook that'll manage the form data
    // A feature of this Hook is the ability to initialize the values of the state. In this case, we want to clear the input fields on the component loading
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    // As the preceding expression shows, formState will have three key-value pairs to represent the three user inputs

    // destructure the formState object into its named properties: name, email, and message
    const { name, email, message } = formState;
    // Now we can use these constants to assign the initial state, which are empty strings, to the defaultValue. This assignment will effectively clear the input fields in the user interface

    // Sync the State --> function that will sync the state of the component formState w the user inputs
    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value })
    };
    // This function will sync the internal state of the component formState with the user input from the DOM
    //  using the setFormState function to update the formState value for the name property. We assign the value taken from the input field in the UI with e.target.value and assign this value to the property formState.name. We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. Without the spread operator, the formState object would be overwritten to only contain the name: value key pair.
    // The name property of target in the preceding expression actually refers to the name attribute of the form element. This attribute value matches the property names of formState (name, email, and message) and allows us to use [ ] to create dynamic property name
    // Now that the handleChange function can set the state for all three properties
    // console.log(formState); for testing if it works
    // Note that console.log(formState) is located outside the handleChange function declaration—because the asynchronous nature of the setFormState function will cause the console.log placed in the function body of handleChange to appear delayed in its ability to sync

    // Submit Form Data Function
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }
      
    // JSX
    return (
        <section>
          <h1>Contact me</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" defaultValue={name} onChange={handleChange} />
                {/* The onChange event listener will ensure that the handleChange function fires whenever a keystroke is typed into the input field for name */}
            </div>
            <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" name="email" defaultValue={email} onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" rows="5" defaultValue={message} onChange={handleChange} />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
    )
}
// Due to keywords reserved in JavaScript, we need to replace the for attribute in the <label> element to htmlFor, just as class had to be changed to className previously.
    
export default ContactForm;

// To sync the form data of the user input with the component's state, we'll apply the useState Hook 
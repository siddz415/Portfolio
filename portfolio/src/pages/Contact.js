
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react';
import '../styles/Contact.css';
import { validateEmail } from './../utils/helpers';


  
  function Contact() {
    const [formState, setFormState] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;
  
    const onSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      formData.append("access_key", "5cd70367-07ef-438a-8f7e-8ffbf9b15005");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
        console.log("Success", res);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Based on the input type, we set the state of either email, username, and password
      if (!errorMessage) {
        console.log('Submit Form', formState);
        
      }
     
    }
  
    const handleChange = (e) => {
      if (e.target.name === 'email') { // this has to same as form name
        const isValid = validateEmail(e.target.value);
        if (!isValid) {
          setErrorMessage('Email is invalid')
        } else {
          setErrorMessage('')
        }
  
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required`)
        } else {
          setErrorMessage('')
        }
      }
      if (!errorMessage) {
        setFormState({ ...formState, [e.target.name]: e.target.value })
        console.log('Handle Form', formState)
      }
    }
    // Preventing the default behavior of the form submit (which is to refresh the page)
     
  
    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    
    // We want to exit out of this code block if something is wrong so that the user can correct it
        
    // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
      
      
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    // setName('');
    // setMessage('');
    // setEmail('');
    
    return (
      <div className='form-container'>
        <Form id='contact-form' onSubmit={onSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name='name' defaultValue={name} onBlur={handleChange} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name='email' defaultValue={email} onBlur={handleChange} placeholder="name@example.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" name='message' defaultValue={message} onBlur={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit" className='btn'>
            Submit
          </Button>
        </Form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    );
  }

      export default Contact;

import React, { useState } from "react";
import './styles/contact-style.css';


const ContactUs = () => {
  // The form data is stored in the state
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    surname: "",
    email: "",
    phone: "",
    message: "",
    terms: false,
  });

  // The errors are stored in the state
  const [errors, setErrors] = useState({});

  // This function validates the form data and returns an object with the errors
  const validateForm = () => {
    const errors = {};
    if (!formData.type) errors.type = "Please select an option";
    if (!formData.name) errors.name = "Please enter your name";
    if (!formData.surname) errors.surname = "Please enter your surname";
    if (!formData.email) errors.email = "Please enter your email";
    if (!formData.message) errors.message = "Please enter a message";
    if (!formData.terms) errors.terms = "Please agree to the terms and conditions";
    return errors;
  };

  // This function is called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    const errors = validateForm();

    // If there are no errors, submit the form data
    if (Object.keys(errors).length === 0) {
      // Send the form data to the server or do whatever you need to do
    } 
    // Otherwise, display the errors
    else {
      setErrors(errors);
    }
  };

  // This function is called when the form is reset
  const handleReset = () => {
    // Reset the form data
    setFormData({
      type: "",
      name: "",
      surname: "",
      email: "",
      phone: "",
      message: "",
      terms: false,
    });

    // Reset the errors
    setErrors({});
  };

  // This function is called when the value of a form field changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Update the form data
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="form-div">
    <div className="div"></div>
    <form className="my-form" onSubmit={handleSubmit}>
      <div className="container-div">
        <h1 className="contact-h1">Get in touch!</h1>
        <p className="contact-p">If you have any questions about our african traditional recipes, contact us</p>
        <ul>
          <li>
            <select name="type" value={formData.type} onChange={handleChange}>
              <option selected disabled>-- Please choose an option --</option>
              <option>Request Quote</option>
              <option>Send Resume</option>
              <option>Other</option>
            </select>
            {errors.type && <span className="error">{errors.type}</span>}
          </li>
          <li>
            <div className="grid grid-2">
              <input type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange} required />
              {errors.name && <span className="error">{errors.name}</span>}
              <input type="text" placeholder="Surname" name="surname" value={formData.surname} onChange={handleChange} required />
              {errors.surname && <span className="error">{errors.surname}</span>}
            </div>
          </li>
          <li>
            <div className="grid grid-2">
              <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
              {errors.email && <span className="error">{errors.email}</span>}
              <input type="tel" placeholder="Phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
          </li>
          <li>
            <textarea placeholder="Message" name="message" value={formData.message} onChange={handleChange} required />
            {errors.message && <span className="error">{errors.message}</span>}
          </li>
          
          <li>
            <div className="grid grid-3">
              <div className="required-msg">REQUIRED FIELDS</div>
              <button className="btn-grid" type="submit" disabled={Object.keys(errors).length > 0}>
                <span className="back">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/email-icon.svg" alt="" />
                </span>
                <span className="front">SUBMIT</span>
              </button>
              <button className="btn-grid" type="reset" onClick={handleReset}>
                <span className="back">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/eraser-icon.svg" alt="" />
                </span>
                <span className="front">RESET</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </form>
    <div className="div"></div>
    </div>
  );
};

export default ContactUs;
import React from 'react';
import { useState } from 'react';
import "../index.css";

function ContactForm() {

    const [hover, setHover] = useState(false);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handleNameChange = (event) => {
        setName(event.target.value);
    }
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Message submitted successfully!")
        console.log(`Email: ${email}`);
        console.log(`Name: ${name}`);
        console.log(`${message}`);
    }

    const handleMouseEnter = () => {
        setHover(true);
    }
    const handleMouseLeave = () =>{
        setHover(false);
    }

    const buttonStyle = {
        backgroundColor: hover ? '#fff': 'rgb(12, 149, 151)',
        color: hover ? 'black' : "#fff",
        width: "100%"
    }
    return (
      <form onSubmit={handleSubmit}>
        <div className="d-flex">
          <input
            style={{
              width: "50%",
            }}
            className="rounded-3"
            type="name"
            value={name}
            onChange={handleNameChange}
            required
            placeholder="Name[Required]"
          />
          <input
            style={{
              width: "50%",
            }}
            className="ms-4 rounded-3"
            type="company"
            placeholder="Company"
          />
        </div>
        <div className="d-flex mt-4">
          <input
            style={{
              width: "50%",
            }}
            className="rounded-3"
            type="email"
            value={email}
            onChange ={handleEmailChange}
            required
            placeholder="Email[Required]"
          />
          <input
            style={{
              width: "50%",
            }}
            className="ms-4 rounded-3"
            type="tel"
            name="phone"
            required
            placeholder="Phone Number"
          />
        </div>
        <div className="mt-4">
          <input
            style={{
              width: "100%",
            }}
            type="subject"
            className="rounded-3"
            placeholder="Subject[Reason for Contacting Us]"
          />
        </div>
        <div className="mt-4">
          <textarea
            style={{
              width: "100%",
            }}
            name="message"
            id="message-area"
            placeholder="Message"
            cols="100"
            rows="7"
            value={message}
            onChange = {handleMessageChange}
            className="rounded-3"
          ></textarea>
        </div>
        <div className="mt-3">
                <button
                    className='rounded-3 button-hover text-uppercase fw-bold'
                    style={buttonStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave ={handleMouseLeave}
            type="submit"
          >
            Send Message
          </button>
        </div>
      </form>
    );
}

export default ContactForm;
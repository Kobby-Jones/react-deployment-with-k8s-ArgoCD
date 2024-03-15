import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import "../../../src/index.css"
function ContactForm() {

  const [hover, setHover] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');
  const [formData, setFormData] = useState([])

  const onNameChange = (event) => {
    setName(event.target.value);
  }
  const onEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const onMessageChange = (event) => {
    setMessage(event.target.value);
  }
  const onSubjectChange = (event) => {
    setSubject(event.target.value);
  }
  const onPhoneChange = (event) => {
    setPhone(event.target.value);
  }
  const onCompanyChange = (event) => {
    setCompany(event.target.value);
  }
 
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    try {
      const userData = {
        name: name,
        email: email,
        number: phone,
        subject: subject,
        company: company,
        message: message,
      };  
      const response = await axios.post("http://localhost:5000/customers", userData)
      console.log(response.data)
      const newData = [...formData, ...response.data]
      setFormData(newData)
  } catch {
    console.log("Error");
  }
}

  const handleMouseEnter = () => {
    setHover(true);
  }
  const handleMouseLeave = () => {
    setHover(false);
  }

  const buttonStyle = {
    backgroundColor: hover ? '#fff' : 'rgb(12, 149, 151)',
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
          type="text"
          value={name}
          onChange={onNameChange}
          required
          placeholder="Name[Required]"
        />
        <input
          style={{
            width: "50%",
          }}
          className="ms-4 rounded-3"
          type="text"
          required
          value={company}
          onChange={onCompanyChange}
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
          onChange={onEmailChange}
          required
          placeholder="Email[Required]"
        />
        <input
          style={{
            width: "50%",
          }}
          className="ms-4 rounded-3"
          type="tel"
          value={phone}
          required
          placeholder="Phone Number"
          onChange={onPhoneChange}
        />
      </div>
      <div className="mt-4">
        <input
          style={{
            width: "100%",
          }}
          
          onChange={onSubjectChange}
          type="text"
          value={subject}
          required
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
          onChange={onMessageChange}
          className="rounded-3"
        ></textarea>
      </div>
      <div className="mt-3">
        <button
          className='rounded-3 button-hover text-uppercase fw-bold'
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>

     
  );
}

export default ContactForm;
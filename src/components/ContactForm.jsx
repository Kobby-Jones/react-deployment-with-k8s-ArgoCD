import React from 'react';
function ContactForm() {
    return (
      <form action="">
        <div className="d-flex">
          <input
            style={{
              width: "50%",
            }}
            className="rounded-3"
            type="name"
            required
            placeholder="Name[Required]"
          />
          <input
            style={{
              width: "50%",
            }}
            className="ms-4 rounded-3"
            type="company"
            placeholder="Company[Optional]"
          />
        </div>
        <div className="d-flex mt-4">
          <input
            style={{
              width: "50%",
            }}
            className="rounded-3"
            type="email"
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
            className="rounded-3"
          ></textarea>
        </div>
      </form>
    );
}

export default ContactForm;
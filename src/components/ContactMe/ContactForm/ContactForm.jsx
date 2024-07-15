import React from 'react'
import './ContactForm.css'
import 'react-notifications/lib/notifications.css';
import NotificationContainer from 'react-notifications/lib/NotificationContainer';
import { NotificationManager } from 'react-notifications';

const ContactForm = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "cbce1593-1f02-44c6-bb86-ed31d7897f16");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {

      NotificationManager.success("Thank you !",'Message Sent',5000);
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      NotificationManager.error("Something went Wrong. Try again","Oops !",5000);
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <NotificationContainer/>
      <div className='contact-form-content'>
          <div className="paragraph">
          I look forward to hearing from you! Whether it's about potential projects, feedback, or any inquiries, feel free to send me a message. I'll respond as soon as I can.
          </div>
          <div className="heading">
          PING ME HERE 
          </div>
          <form onSubmit={onSubmit}>
              <div className="name-container">
                  <input type="text" name="first" placeholder='First Name' required/>
                  <input type="text" name="last" placeholder='Last Name'/>
              </div>

              <input type="text" name="email" placeholder='Email' required/>
              <textarea name="message" placeholder="Message" rows={3} required/>
              
              <button>SEND</button>
          </form>

      </div>
      </>
  )
}

export default ContactForm

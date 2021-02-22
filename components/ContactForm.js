import styles from "../styles/modules/Footer.module.scss";
import { useState } from "react";
import axios from "axios";



function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    sent: false,
    buttonText: "Submit"
  });
 
  function resetForm() {
    setFormData({
      name: "",
      email: "",
      message: "",
      sent: false,
      buttonText: "Submit"
    })
  };

  function handleChange(e) {
    const { value, name } = e.target;
    
    setFormData(prevValue => {
      return {
        ...prevValue,
        [name]: value
      }
    })
  };

  function validateForms() {
    const { name, email, message } = formData;
    if (name === "" || email === "" || message === "") {
      setFormData(prevValue => {
        return {
          ...prevValue,
          buttonText: "Please fill out all fields."
        }
      });
      return false;
    } else {
      return true;
    }
  }

  function submit(e) {
    e.preventDefault();

    const check = validateForms();
    
    if (check) {
      setFormData({buttonText: "Sending..."})

      axios.post(process.env.CN_API_URL, formData)
        .then(res => {
          console.log(res);
          if (res.data.response === "250 Message received") {
            setFormData(prevValue => {
              return {
                ...prevValue,
                sent: true, 
                buttonText: "Sent!"
              }
            }, resetForm());
          } else {
            alert("There was an error sending the message. Sorry, please try again later.")
          }       
        })
        .catch(err => {
          console.log(err);
        })
    }  
  };

  return (
    <form className={styles.contactForm}>
    <div className={styles.formInputRow}>
      <input 
        type="text" 
        name="name" 
        placeholder="Your Name" 
        className={styles.formInput} 
        required
        onChange={handleChange}
        value={formData.name}
        />
      <input 
        type="email" 
        name="email" 
        placeholder="your@email.com" 
        className={styles.formInput} 
        required
        onChange={handleChange} 
        value={formData.email} 
        />
    </div>
    <p className={styles.antispam}>Please leave this empty: <input type="text" name="url"></input></p>
    <textarea 
      type="text" 
      name="message" 
      placeholder="Please write your message here" 
      className={styles.formMessage} 
      required
      onChange={handleChange} 
      value={formData.message}
      />
    <button 
      type="submit" 
      className={`btn ${styles.formSubmit}`} 
      onClick={submit} 
      value={formData.buttonText}
    >
      {formData.buttonText}
    </button>
  </form>
  )
}

export default ContactForm;
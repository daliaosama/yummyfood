import './Contact.css'
import * as yup from "yup"
import { useState } from 'react'

const Contact = () => {
  function handleSubmit(event){
    event.preventDefault()
    testValidation()
  }
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    message:''
  })
  const [errors, setErrors] = useState({});
  const userSchema=yup.object().shape({
    name:yup.string().required(),
    email:yup.string().email("Must be a valid email").required('Email is required'),
    message:yup.string().required(),
   
  })
  async function testValidation() {
    try {
      await userSchema.validate(formData, { abortEarly: false });
      setErrors({});
     
    } catch (err) {
      const validationErrors = {};
          err.inner.forEach((error) => {
            validationErrors[error.path] = error.message;
          });
          setErrors(validationErrors);
        
      }
     
    }
    function onHandleChange(event){
      var value=event.target.value;
      const key=event.target.name;
     
      
      setFormData({
        ...formData,
        [key]:value
      })
      
      setErrors({ ...errors, [event.target.name]: '' });
    }
    
  return (
    <div id="Contact">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7292345.57542882!2d25.581655534855916!3d26.817182426385546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14368976c35c36e9%3A0x2c45a00925c4c444!2sEgypt!5e0!3m2!1sen!2seg!4v1727313972552!5m2!1sen!2seg" width="600" height="500"  allowFullScreen="" loading="lazy" className='frame'></iframe>
      <form onSubmit={handleSubmit}>
      <h1>Contact Us</h1>
        <div id="name">
          <label htmlFor="name">Name:</label>
          <input id="name" placeholder=" your name" type="text"name="name" onChange={onHandleChange} value={formData.name}
           style={{
            borderColor: errors.name? 'red' : '#ccc',
            borderWidth: '1px',
            borderStyle: 'solid',
          }}/>
           {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>} 
        </div>
        <div id="email">
          <label htmlFor="email">Email:</label>
          <input type="email" placeholder=' user@example.com' name="email" id="email" onChange={onHandleChange} 
           style={{
            borderColor: errors.email ? 'red' : '#ccc',
            borderWidth: '1px',
            borderStyle: 'solid',
          }}/>
          {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
        </div>
       <div id="message">
        <label htmlFor="message">Message:</label>
        <textarea name="message" id="message" placeholder=' your response' cols="30" value={formData.message} rows="10" onChange={onHandleChange}
         style={{
          borderColor: errors.message ? 'red' : '#ccc',
          borderWidth: '1px',
          borderStyle: 'solid',
        }}
        ></textarea>
               {errors.message && <span style={{ color: 'red' }}>{errors.message}</span>}

       </div>
       <input type="submit" value="Send" id="send" />
      </form>
    </div>
  )
}

export default Contact
import YouTube from 'react-youtube';
import './Booking.css'
import * as yup from "yup"
import { useState } from 'react'
const Booking = () => {
  const videoId = 'ylKa46SUDn0'; 
  const [isSubmitted, setIsSubmitted] = useState(false);
  const opts = {
    height: '640',
    width: '450',
    playerVars: {
      autoplay:0, // Auto-play the video
     
      controls:0,
      playlist:videoId,
      
    },}
    const getResponsiveOpts = () => {
    
      if (window.innerWidth <= 812) {
        return {
          height: '300', 
          width: '600', 
          
        };}
       else if (window.innerWidth <= 600) {
          return {
            height: '300', 
            width: '200', 
            
          };
          

      }
      return  opts;}
    function handleSubmit(event){
      event.preventDefault()
      testValidation()
    }
    const [formData,setFormData]=useState({
      name:'',
      email:'',
      people:0,
      datetime: '',
    })
    const [errors, setErrors] = useState({});
    const userSchema=yup.object().shape({
      name:yup.string().required(),
      people:yup.number().required()
      .positive('Number must be positive')
      .integer('Number must be an integer')
      .min(1, 'Number must be greater than or equal to 1')
      .max(7, 'Number must be less than or equal to 100'),
      email:yup.string().email("Must be a valid email").required('Email is required'),
      datetime: yup.date()
      .required('Datetime is required')
      .min(new Date(), 'Datetime cannot be in the past') // Ensure the datetime is in the future
      .typeError('Invalid datetime format'),
  });
     
    
    async function testValidation() {
      try {
        await userSchema.validate(formData, { abortEarly: false });
        setErrors({});
        setIsSubmitted(true);
      } catch (err) {
        const validationErrors = {};
            err.inner.forEach((error) => {
              validationErrors[error.path] = error.message;
            });
            setErrors(validationErrors);
            setIsSubmitted(false); 
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
    <div id="Booking">
      <div id="videobooking">
      <YouTube videoId={videoId} opts={getResponsiveOpts()} />

      </div>
      <div id="booktable">
      <form onSubmit={handleSubmit} id="formbooking">
        <div id="name">
        <label htmlFor="name">Name:</label>
        <input type="text"placeholder=" your name" name="name" onChange={onHandleChange} value={formData.name}
         style={{
          borderColor: errors.name? 'red' : '#ccc',
          borderWidth: '1px',
          borderStyle: 'solid',
        }}
        />
         {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>} 
        </div>
        <div id="email">
          <label htmlFor="email">Email:</label>
          <input type="email"placeholder=' user@example.com' name="email" value={formData.email} onChange={onHandleChange}
           style={{
            borderColor: errors.email ? 'red' : '#ccc',
            borderWidth: '1px',
            borderStyle: 'solid',
          }}
          />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}

        </div>
        <div id="people">
          <label htmlFor="people">Number of people:</label>
          <input type="number" name="people" value={formData.people} 
          onChange={onHandleChange}  style={{
            borderColor: errors.people ? 'red' : '#ccc',
            borderWidth: '1px',
            borderStyle: 'solid',
          }}/>
        </div>
        {errors.people && <span style={{ color: 'red' }}>{errors.people}</span>}
        <div id="time">
        <label htmlFor="">Date & Time</label>
        <input type="datetime-local" name="datetime" id="" value={formData.datetime}onChange={onHandleChange}/>
        {errors.datetime && <span style={{ color: 'red' }}>{errors.datetime}</span>} 
        </div>
       <input type="submit" value="Book Now" id="book"/>
        </form>  
       
              </div>
              {isSubmitted && <div className='submitted'>
          <span>Thanks for choosing Yummy</span>
          <span>table reserved successfully</span>
          </div>}

    </div>
  )
}

export default Booking
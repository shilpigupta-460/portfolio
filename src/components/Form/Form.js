import React, {useRef} from 'react'
import './Form.css'
import emailjs from '@emailjs/browser';



// npm i @emailjs/browser
function Form() {
  
    const form =useRef(null)
    const sendEmail = (e) => {
       
        e.preventDefault();
        {form.current.value == " "? alert(' please fill the data'):  
    
        emailjs.sendForm('service_7v0x50k', 'template_6pm4dts', form.current, 'S2DBsEXo-3IQs1qw8')
          .then((result) => {
              
               console.log(result.text);
              
               alert('Messsage sent')
             
            form.current.reset();
              

          }, (error) => {
              console.log(error.text);
          });
      }
     ;};
     console.log(form.current)
    
    return (
        <div className="form" >
            <form  ref={form} onSubmit={sendEmail}>
                <label> Your name</label>
                <input type="text"   name="user_name" />
                <label> Email</label>
                <input type="Email"  name="user_email"/>
             
                <label> Subject</label>
                <input type="text"  name="subject"></input>
                <label> Message</label>
                <textarea row="4" placeholder=" Typr your Message Here"  name="message" />
                {/* <a class="email-link" href="mailto:shilpi.gupta460@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a> */}
                <button className="btn">Send</button>
            </form>

        </div>
    )
}

export default Form
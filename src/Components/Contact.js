import React from 'react'

function Contact() {
  return (
    <div className='Contact' >
      <form className="ContactForm">
        <h1 className="ContactH1">Contact Us</h1>
        <input type="text" placeholder="Name" required="" className="input1"/>
        <input type="text" placeholder="Email" required="" className="input1"/>
        <input type="text" placeholder="Message" required="" className="input1"/>
        <button type="submit" className="ContactSubmit">Submit</button>
      </form>
    </div>
  )
}

export default Contact
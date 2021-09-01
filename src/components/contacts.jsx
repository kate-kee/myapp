import React, { Component } from 'react'
import emailjs from "emailjs-com"

export default class Contacts extends Component {
  render() {
    function sendEmail(e) {
      e.preventDefault();
      emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, 'kbtemplete', e.target, process.env.REACT_APP_USER_ID)
      .then((result) => {
      console.log("Thank you!");
      }, (error) => {
      console.log(error.text);
      });
      }
    return (
<div>
<section className="colorlib-contact" data-section="contact">
<div className="colorlib-narrow-content">
<div className="row">
<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box " data-animate-effect="fadeInLeft">
<span className="heading-meta">Get in Touch</span>
<div class="row">
<div class="col-md-6 coloelib-heading colorlib-narrow-content">
<h3>My Contact Details: </h3>
</div>
<div class="col-md-6 col-md-push-7  coloelib-heading colorlib-narrow-content">
<h3>Message me: </h3>
</div>
</div>
</div>
</div>
<div className="row">
<div className="col-md-5">
<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
<div className="colorlib-icon">
<i className="icon-globe-outline"></i>
</div>
<div className="colorlib-text">
<p><a href="#">kittybhoirekar@gmail.com</a></p>
</div>
</div>
<div className="colorlib-feature colorlib-feature-sm animate-box " data-animate-effect="fadeInLeft">
<div className="colorlib-icon">
<i className="icon-map"></i>
</div>
<div className="colorlib-text">
<p>Univerity of Texas at Dallas</p>
</div>
</div>
<div className="colorlib-feature colorlib-feature-sm animate-box" data-animate-effect="fadeInLeft">
<div className="colorlib-icon">
<i className="icon-phone"></i>
</div>
<div className="colorlib-text">
<p><a href="tel://">+469 473 6681</a></p>
</div>
</div>
</div>

<div className="col-md-7 col-md-push-1">
<div className="row">

<div className="col-md-10 col-md-offset-1 col-md-pull-1 animate-box " data-animate-effect="fadeInRight">

<div className="card border-primary mb-3">
<form onSubmit={sendEmail}>
  
<div className="form-group" >

<label>
Name:
<input type="text" Name="Name" placeholder="Enter your name" className="form-control" />
</label>
</div>
<div className="form-group">
<label>
Your Email:
<input type="text" className="form-control" placeholder="Enter your Email" name="Email" required type="email"/></label>
</div>
<div className="form-group"><label>
Your Phone:
<input type="text" className="form-control" placeholder="US Number xxx-xxx-xxxx" name="Number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
       required/></label>
</div>
<div className="form-group"><label>
Message:
<textarea name="Message" id="message" cols="30" rows="7" className="form-control" placeholder="Enter your Message"></textarea></label>
</div>
<div className="form-group">
<input type="submit" className="btn btn-primary btn-send-message" value="Send Message"></input>
</div>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
</div>
)
}
}


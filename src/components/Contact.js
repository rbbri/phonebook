import React from 'react';

function Contact(props) {
  return (
    <div>
      <h1> {props.name} </h1>
      <p> {props.phoneNumber} </p>
      <p> {props.address} </p>
    </div>
  )
}

export default Contact;

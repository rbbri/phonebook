import React from 'react';

function Contact(props) {
  return (
    <div>
      <h1> {props.name} </h1>
      <p> Phone: {props.phoneNumber} </p>
      <p> Address: {props.address} </p>
    </div>
  )
}

export default Contact;

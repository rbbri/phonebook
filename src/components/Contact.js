import React from 'react';

function Contact(props) {
  return (
    <div>
      <h2> {props.name} </h2>
      <p> Phone: {props.phoneNumber} </p>
      <p> Address: {props.address} </p>
    </div>
  )
}

export default Contact;

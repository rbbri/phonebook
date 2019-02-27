import React, { Component } from 'react';
import Contact from './Contact'

const API = 'http://www.mocky.io/v2/581335f71000004204abaf83'

class ContactList extends Component {
  state = {
    contacts: []
  }

  componentDidMount(){
  fetch(API)
      .then(response => response.json())
      .then(data => this.setState({contacts: data.contacts}));
}

  render () {
    return (
      <div className='ContactListMain'>
        Contacts
        {this.state.contacts.map(c =>
          <Contact
            name={c.name}
            phoneNumber={c.phone_number}
            address={c.address}
          />
          )}
      </div>
    );
  }
}

export default ContactList;

import React, { Component } from 'react';
import Contact from './Contact'

const API = 'http://www.mocky.io/v2/581335f71000004204abaf83'

class ContactList extends Component {
  state = {
    contacts: [],
    search: ""
  }

  componentDidMount(){
  fetch(API)
      .then(response => response.json())
      .then(data => this.setState({contacts: data.contacts}));
}

  changeSearch = e => {
    this.setState({search: e.target.value})
  }



  render() {

    const {search} = this.state;
    const contacts = this.state.contacts;
    const filteredContacts = contacts.filter(c => {
      return c.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
    })

    return (
      <div className='ContactListMain'>
        Contacts
        <div className='ContactsSearch'>
          <input type='text'
                 placeholder='Search'
                 onChange={this.changeSearch}
          />
        </div>
        <div className='Contacts'>
          {filteredContacts.map(c =>
            <Contact
              name={c.name}
              phoneNumber={c.phone_number}
              address={c.address}
            />
            )}
        </div>
      </div>
    );
  }
}

export default ContactList;

import React, { Component } from 'react';
import Contact from './Contact'

const API = 'http://www.mocky.io/v2/581335f71000004204abaf83'

class ContactList extends Component {
  state = {
    contacts: [],
    filteredContacts: [],
    search: '',
    select: "Sort"
  }

  componentDidMount(){
    fetch(API)
        .then(response => response.json())
        .then(data => this.setState(
          {contacts: data.contacts, filteredContacts: data.contacts}
        )
      )
    }

  changeOrder = e => {
    this.setState({select: e.target.value});
    if (e.target.value === 'Ascending') {this.sortAscending()}
    if (e.target.value === 'Descending') {this.sortDescending()}
  }

  changeSearch = e => {
    this.setState({search: e.target.value});
    this.searchContacts();
  }

  sortByName = (x,y) => {
    return ((x.name === y.name) ? 0 : ((x.name > y.name) ? 1 : -1));
  }

  sortAscending = () => {
    let contacts = this.state.contacts;
    let filteredContacts = contacts.sort(this.sortByName);
    this.setState({filteredContacts})
  }

  sortDescending = () => {
    let contacts = this.state.contacts;
    let filteredContacts = contacts.sort(this.sortByName).reverse();
    this.setState({filteredContacts});
  }

  searchContacts = () => {
    let search = this.state.search;
    let contacts = this.state.contacts;
    let filteredContacts = contacts.filter(c => {
      return c.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
      })
    this.setState({filteredContacts});
  }

  render() {
    return (
      <div className='ContactListMain'>
        <h1> Contacts </h1>
        <div className='ContactsSearch'>
          <input type='text'
                 placeholder='Search'
                 onChange={this.changeSearch}
          />
        </div>
        <div className='ContactsSort'>
          <select value={this.state.select} onChange={this.changeOrder}>
            <option value='Sort'>Sort</option>
            <option value='Ascending'>Ascending</option>
            <option value='Descending'>Descending</option>
          </select>
        </div>
        <div className='Contacts'>
          {this.state.filteredContacts.map(c =>
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

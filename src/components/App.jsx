import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { ContactsForm } from './ContactsForm/ContactsForm'
import { ContactsBook } from './ContactsBook/ContactsBook'
import { Filter } from './Filter/Filter'

export default class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  onAddContacts = (values, helpers) => {
    const contact = {
      id: nanoid(),
      name: values.name,
      number: values.number
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }));

    helpers.resetForm();
  }

  onInputFilter = (e) => {
    this.setState({ filter: e.target.value });
  }

  getContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    })
  }

  render() {
    const { filter } = this.state;
    
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactsForm onSubmitForm={this.onAddContacts} />

        <h2>Contacts</h2>
        <Filter filter={filter} onInputFilter={this.onInputFilter} />
        <ContactsBook
          contacts={this.getContacts()}
          filter={filter}
          onInputFilter={this.onInputFilter}
        />
      </div>
    )
  }
}

import React, { Component } from 'react'
import Notiflix from 'notiflix'
import { nanoid } from 'nanoid'
import { RiContactsBook2Fill } from 'react-icons/ri';
import { ContactsForm } from './ContactsForm/ContactsForm'
import { ContactsBook } from './ContactsBook/ContactsBook'
import { Filter } from './Filter/Filter'
import { MainContainer, AppTitle } from './App.styled';
export default class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

  onAddContacts = (values, helpers) => {
    if (this.state.contacts.some(contact => contact.name === values.name)) {
      Notiflix.Notify.failure('This person already exists');
      helpers.resetForm();
      return;
    }

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

  onDeleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }))
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
        <AppTitle><RiContactsBook2Fill />Phonebook</AppTitle>

        <MainContainer>
          <ContactsForm onSubmitForm={this.onAddContacts} />

          <div>
            <h2>Contacts</h2>
            <Filter filter={filter} onInputFilter={this.onInputFilter} />
            <ContactsBook
              contacts={this.getContacts()}
              onDeleteContact={this.onDeleteContact}
            />
          </div>
        </MainContainer>
      </div>
    )
  }
}

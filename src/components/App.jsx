import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import { ContactsForm } from './ContactsForm/ContactsForm'
import { ContactsBook } from './ContactsBook/ContactsBook'

export default class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

  onAddContacts = (values, helpers) => {
    const contact = {
      id: nanoid(),
      name: values.name
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, contact]
    }));

    helpers.resetForm();
  }

  render() {
    return (
      <div>
        <ContactsForm onSubmitForm={this.onAddContacts} />
        <ContactsBook contacts={this.state.contacts} />
      </div>
    )
  }
}

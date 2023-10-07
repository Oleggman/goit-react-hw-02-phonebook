import { Contact } from "components/Contact/Contact";

export const ContactsBook = ({ contacts, onDeleteContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact =>
          <Contact
            key={contact.id}
            contact={contact}
            onDeleteContact={onDeleteContact}
          />)}
      </ul>
    </div>
  );
}
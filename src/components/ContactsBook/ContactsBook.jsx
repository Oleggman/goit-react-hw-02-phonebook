export const ContactsBook = ({contacts}) => {
  return (
    <div>
      <h2>Contacts</h2>
      <ul>
        {contacts.map(({ id, name }) => <li key={id}>{name}</li>)}
      </ul>
    </div>
  );
}
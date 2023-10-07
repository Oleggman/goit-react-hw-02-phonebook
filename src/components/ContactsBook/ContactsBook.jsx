export const ContactsBook = ({ contacts, filter, onInputFilter }) => {
  return (
    <div>
      <h2>Contacts</h2>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={onInputFilter} />

      <ul>
        {contacts.map(({ id, name, number }) =>
          <li key={id}>{name}: {number}</li>)}
      </ul>
    </div>
  );
}
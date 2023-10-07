export const Contact = ({ contact: { id, name, number}, onDeleteContact }) => {
  return (
    <li>
      <p>{name}: {number}</p>
      <button type="button" onClick={() => onDeleteContact(id)}>Delete</button>
    </li>
  );
}
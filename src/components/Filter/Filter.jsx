export const Filter = ({ filter, onInputFilter }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input type="text" value={filter} onChange={onInputFilter} />
    </div>
  );
}
import { InputFilter, FilterTitle, FilterBox } from "./Filter.styled";

export const Filter = ({ filter, onInputFilter }) => {
  return (
    <FilterBox>
      <FilterTitle>Find contacts by name</FilterTitle>
      <InputFilter placeholder="Filter..." type="text" value={filter} onChange={onInputFilter} />
    </FilterBox>
  );
}
import { StyledInput } from './Filter.styled';

const Filter = ({ onChange, value }) => {
  return <StyledInput type="text" onChange={onChange} value={value} />;
};

export default Filter;

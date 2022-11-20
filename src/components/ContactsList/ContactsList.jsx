import { StyledList, StyledItem, StyledButton } from './ContactsList.styled';

const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <StyledList>
      {contacts.map(({ id, name, number }) => {
        return (
          <StyledItem key={id}>
            <p>{`${name} ${number}`}</p>
            <StyledButton type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </StyledButton>
          </StyledItem>
        );
      })}
    </StyledList>
  );
};

export default ContactsList;

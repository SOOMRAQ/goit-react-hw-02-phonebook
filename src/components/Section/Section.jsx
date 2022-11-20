import { Section, Title } from './Section.styled';

const PhonebookSection = ({ title, children }) => {
  return (
    <Section>
      <Title>{title}</Title>
      {children}
    </Section>
  );
};

export default PhonebookSection;

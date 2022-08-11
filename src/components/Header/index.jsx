import {
  Header,
  AllContainer,
  TitleContainer,
  Title,
  Span,
  InputContainer,
  Input,
  Button,
} from "./style";
const BurgerHeader = ({ search }) => {
  function formSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { name } = Object.fromEntries(formData);
    search(name);
  }

  return (
    <Header>
      <AllContainer>
        <TitleContainer>
          <Title>
            Burguer <Span>Kenzie</Span>
          </Title>
        </TitleContainer>

        <InputContainer onSubmit={formSubmit}>
          <Input name="name" type="text" placeholder="Buscar produtos" />
          <Button type="submit">Buscar</Button>
        </InputContainer>
      </AllContainer>
    </Header>
  );
};

export default BurgerHeader;

import { Container, Content, NavLinks } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <NavLinks>
          <h1 style={{cursor:"pointer"}}>WebRest</h1>
          <a href="#solved">Para você</a>
          <a href="#design">Design</a>
          <a href="#sitesSolveds">Projetos</a>
          <a href="#contact">Contatos</a>
        </NavLinks>
      </Content>
    </Container>
  );
};

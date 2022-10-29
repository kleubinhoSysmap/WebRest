import { Container } from "./styles";
import { AiOutlineWhatsApp, AiOutlineMail } from "react-icons/ai";

export const Footer = () => {
  return (
    <Container>
      <h3>Contatos:</h3>
      <a>
        <AiOutlineWhatsApp />
        (11)91254-2356
      </a>

      <a href="mailto:contato@gmail.com">
        <AiOutlineMail />
        webrest@gmail.com
      </a>
      <p>Created by: Web-Rest</p>
    </Container>
  );
};

import { Header } from "./Components/Header";
import {
  Contact,
  Content,
  Home,
  ImageDesign,
  ImagesDesign,
  SitesSolveds,
  Solved,
  TextsContact,
  TextSolved,
  TextsSitesSolveds,
  TitleSolved,
} from "./styles";
import { Design } from "../utils/mock";
import { BiTime } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { RiMailOpenLine } from "react-icons/ri";

import ilustrate from "./assets/2.png";
import nike from "./assets/nike.jpg";

function App() {
  return (
    <Home>
      <Header />
      <Content>
        <main>
          <Solved id="solved">
            <div>
              <TitleSolved>
                WebRest feita <span>para você</span>
              </TitleSolved>

              <TextSolved>
                O mundo se abre com infinitas possibilidades com o uso da
                tecnologia. E acreditamos que o seu produto, sua marca, seu
                desafio, rompem fronteiras e aproximam as pessoas.
                <br />
                <br />
                Por isso, nosso objetivo é estar junto a você, sempre disponível
                e na forma correta. Oferecendo uma experiência única e
                inovadora, afim de criar novas oportunidades capazes de
                surpreender!
              </TextSolved>
            </div>
            <img
              style={{ width: 600, objectFit: "cover" }}
              src={ilustrate}
              alt=""
            />
          </Solved>

          <div id="design">
            <h1 style={{ textAlign: "center", marginBottom: 20 }}>
              Elaboração de design
            </h1>

            <ImagesDesign>
              {Design.map((img) => (
                <div key={img.url}>
                  <ImageDesign src={img?.url} />
                  <p
                    style={{
                      textAlign: "center",
                      fontWeight: "bold",
                      textTransform: "lowercase",
                    }}
                  >
                    {img?.title}
                  </p>
                </div>
              ))}
            </ImagesDesign>
          </div>

          <SitesSolveds id="sitesSolveds">
            <img style={{ width: 500, borderRadius: 10 }} src={nike} alt="" />

            <TextsSitesSolveds>
              <span>#SOLVEDBYWEBREST</span>
              <h1>
                Nike{" "}
                <span>
                  Veja o site <BsArrowRight />{" "}
                </span>
              </h1>

              <p style={{ textAlign: "justify" }}>
                A Nike é o maior portal de compras on-line da moda mundial, com
                <br /> a solução mais rápida e segura para você abastecer a sua
                loja.
              </p>
            </TextsSitesSolveds>
          </SitesSolveds>

          <Contact id="contact">
            <img
              style={{ width: 480, objectFit: "cover" }}
              src={ilustrate}
              alt=""
            />

            <TextsContact>
              <h1>
                Fale <span>conosco</span>
              </h1>

              <p>
                <BiTime /> Horário: <span>24 horas / 7 dias</span>
              </p>
              <p>
                <FaFacebookF />
                Facebook: <span>WebRest</span>
              </p>
              <p>
                <FaWhatsapp />
                Whatsapp: <span>(11) 9 9999-9999</span>
              </p>
              <p>
                <RiMailOpenLine />
                E-mail: <span>contato@webrest.com.br</span>
              </p>
            </TextsContact>
          </Contact>
        </main>
      </Content>
      {/* <Footer /> */}
    </Home>
  );
}

export default App;

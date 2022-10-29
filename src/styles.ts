import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: var(--max-width);
`;

export const Solved = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  min-height: 40rem;
`;

export const SitesSolveds = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 40rem;
  gap: 40px;
`;

export const TextsSitesSolveds = styled.div`
  h1 {
    font-weight: lighter;
    display: flex;
    gap: 8px;

    span {
      font-size: 16px;
      color: #235bcf;
      display: flex;
      align-items: center; 
      cursor: pointer;
    }
  }
`;

export const TitleSolved = styled.h1`
  font-weight: normal;

  span {
    font-weight: bold;
    text-decoration: underline;
  }
`;

export const TextSolved = styled.p`
  line-height: 30px;
  text-align: justify;
  margin-top: 20px;
`;

export const ImagesDesign = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 50px;
`;

export const ImageDesign = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const Contact = styled.div`
  min-height: 30rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

export const TextsContact = styled.div`
  h1 {
    font-weight: lighter;
    span {
      font-weight: bold;
    }
  }

  p {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 18px;
    line-height: 55px;
    svg {
      font-size: 22px;
    }

    span {
      font-weight: bolder;
      cursor: pointer;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

import styled from 'styled-components';

export const FooterContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
  border-top: 1.5px solid black;

  @media screen and (max-width: 800px) {
    height: 40px;
  }
`;

export const FooterContent = styled.p`
  font-size: 1rem;
  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
  }
`;
import styled from 'styled-components';

export const FooterContainer = styled.div`
  height: 70px;
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #222831;
  color: #eee;

  @media screen and (max-width: 800px) {
    height: 40px;
    margin-top: 2rem;
  }
`;

export const FooterContent = styled.p`
  font-size: 1rem;
  @media screen and (max-width: 800px) {
    font-size: 0.8rem;
  }
`;
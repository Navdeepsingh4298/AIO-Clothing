import styled, { css } from 'styled-components';

const centerStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const ContactPageContainer = styled.div`
`;

export const ContactHeaderContainer = styled.div`
  ${centerStyles}
  flex-direction: column;
  margin: 1rem auto;
  padding: 2rem;
  width: 100%;
  background: #eee;
  @media screen and (max-width: 800px){
    padding: 1rem;
  }
`;

export const ContactTitle = styled.h2`
  font-size: 2rem;

  @media screen and (max-width: 800px){
    font-size: 1.5rem;
  }
`;

export const ContactContent = styled.p`
  font-size: 1.5rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 800px){
    font-size: 1rem;
  }
`;

export const ContactForm = styled.form`
  padding: 1rem;
  margin: 10px 1rem;
  width: 45vw;

  @media screen and (max-width: 800px){
    width: 80vw;  
  }
`;

export const ContactInfoContainer = styled.div`
  width: 45vw;
  padding: 1rem;
  margin: 10px 1.5rem;

  h2{
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 800px){
    width: 80vw;  
    margin: 10px 1rem;
  }
`;

export const ContactInfo = styled.p`
  font-size: 1.3rem;

  @media screen and (max-width: 800px){
    font-size: 1rem;
  }
`;

export const FormAndInfoContainer = styled.div`
  ${centerStyles}
  flex-direction: space-between;
  margin: 1rem auto;
  width: 80%;

  @media screen and (max-width: 800px){
    min-width: 90vw;
    flex-direction: column;
  }
`;
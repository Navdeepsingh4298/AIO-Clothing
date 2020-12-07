import styled from 'styled-components';

export const ErrorPageContainer = styled.div`
  height: 60vh;
  width: 100vw;
  margin: 2rem auto 5rem;
  padding: 2rem 1rem;
  background-color: #eee;
 
 & .home-btn{
   width: 5rem;
 }
`;

export const ErrorPageTitle = styled.h2`
   font-size: 3rem;

  @media screen and (max-width: 800px){
    font-size: 2rem;
  }
`;

export const ErrorPageContent = styled.p`
  font-size: 1.5rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 800px){
    font-size:1rem;
  }
`
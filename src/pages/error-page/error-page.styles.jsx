import styled from 'styled-components';

export const ErrorPageContainer = styled.div`
  height: 75vh;
  width: 100%;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #eee;
  display: flex;
  justigy-content: center;
  align-items: center;
  flex-direction: column;
 
  & .home-btn{
    width: 200px;
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

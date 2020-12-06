import styled from 'styled-components';

export const CollectionPageContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CollectionTitle = styled.h2`
  font-size: 35px;
  margin: 0 auto 10px;
  @media screen and (max-width: 800px){
    font-size: 20px;
  }
`;

export const CollectionItemsContainer = styled.div`
  margin: 10px 3%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;

  @media screen and (max-width: 800px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;
import styled from 'styled-components';

export const CheckoutPageContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px auto;
  button {
    margin-left: auto;
    margin-top: 50px;
  }
   @media screen and (max-width: 800px){
     width: 90%;
     margin: 10px 5%;
   }
`;

export const CheckoutTitle = styled.h2`
  font-size: 2.5rem;
  @media screen and (max-width: 800px){
    font-size: 1.6rem;
    margin-top: 0;
  }
`;

export const CheckoutHeaderContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const HeaderBlockContainer = styled.div`
  text-transform: capitalize;
  width: 23%;
  &:last-child {
    width: 8%;
  }
`;

export const TotalContainer = styled.div`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const WarningContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
  color: red;
   @media screen and (max-width: 800px){
     font-size: 18px;
   }
`;

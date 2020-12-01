import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const centerdStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  border-bottom: 1px solid black;

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
    margin-button: 20px;
  }
`;

export const BrandContainer = styled(Link)`
  ${centerdStyles}
  border: 1px dashed black;
  border-radius: 50px;

  @media screen and (max-width: 800px){
    border-radius: 30px;
  }
`;

export const LogoContainer = styled.div`
  ${centerdStyles}
  height: 100%;
  width: 100px;
  padding: 20px;

  @media screen and (max-width: 800px) {
    width: 50px;
    height: 50px;
    padding: 8px;
  }
`;

export const Heading = styled.h2`
  font-weight: 400;
  font-size: 3rem;
  padding-right: 20px;

  @media screen and (max-width: 800px){
    font-size: 1rem;
    font-weight: 200;
    padding-right: 10px;
    margin: 0;
  }
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 800px){
    width: 70%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 300;
  border: 1px dashed black;
  border-radius: 20px;
  margin-right: 10px;

  @media screen and (max-width: 800px){
    font-size: 0.7rem;
    padding: 5px 8px;
    margin-right: 5px;
  }
`;


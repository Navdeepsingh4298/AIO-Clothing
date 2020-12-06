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
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  background: #f3f3f3;
  box-shadow: 0 2px 20px #888;
  

  @media screen and (max-width: 800px) {
    height: 60px;
    padding: 10px;
  }
`;

export const BrandContainer = styled(Link)`
  ${centerdStyles}
  height: 70%;
`;

export const LogoContainer = styled.div`
  ${centerdStyles}
  height: 100px;
  width: 100px;
  padding: 20px;

  & .logo {
    height: 100px;
    width: 100px;
  }

  @media screen and (max-width: 800px) {
    width: 50px;
    height: 50px;
    padding: 8px;

    & .logo {
    height: 50px;
    width: 50px;
  }
  }
`;

export const Heading = styled.h2`
  font-size: 2.8rem;
  padding-right: 20px;

  @media screen and (max-width: 800px){
    font-size: 1rem;
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
    width: 60%;
  }
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 400;
  border: 1px dashed black;
  border-radius: 20px;
  margin-right: 10px;

  &:hover {
    background: #ffda81;
  }

  @media screen and (max-width: 800px){
    font-size: 0.7rem;
    padding: 5px 8px;
    margin-right: 5px;
  }
`;


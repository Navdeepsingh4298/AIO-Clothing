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
`;

export const BrandContainer = styled(Link)`
  ${centerdStyles}
  border: 1px dashed black;
  border-radius: 50px;
`;

export const LogoContainer = styled.div`
  ${centerdStyles}
  height: 100%;
  width: 100px;
  padding: 20px;
`;

export const Heading = styled.h2`
  font-weight: 400;
  font-size: 3rem;
  padding-right: 20px;
`;

export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  font-weight: 300;
  border: 1px dashed black;
  border-radius: 20px;
  margin-left: 10px;
`;


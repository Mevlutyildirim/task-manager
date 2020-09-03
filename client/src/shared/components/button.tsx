import React from 'react';
import styled, { css } from 'styled-components';

type ButtonProps = {
  title: string;
  render?: any;
}

const PrimaryButton:React.FC<ButtonProps>= ({title}) =>{
  return(
    <PrimaryButtonStyle>
     {title}
    </PrimaryButtonStyle>
  )
}

const SecondaryButton:React.FC<ButtonProps> = ({title, render}) => {
  return(
    <SecondaryButtonStyle onClick={render}>
      {title}
    </SecondaryButtonStyle>
  )
}

const ButtonBase = css`
height: 40px;
margin: 10px;
box-sizing: border-box;
border-radius: 6px;
`;

const PrimaryButtonStyle = styled.button`
${ButtonBase}
background: ${props => props.theme.colors.primary};
border: 1px solid #DBDBDB;
color: #fff;
width: 324px;
`;

const SecondaryButtonStyle = styled.button`
${ButtonBase}
background: #fff;
border: 1px solid #3E95EF;
padding: 0 20px;
`;

export {PrimaryButton, SecondaryButton};

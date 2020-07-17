import React from 'react';
import styled from 'styled-components';

function Button({title}){

  return(
    <PrimaryButton>
     {title}
    </PrimaryButton>
  )
}

const PrimaryButton = styled.button`
width: 324px;
height: 40px;
margin: 10px;
background: #3E95EF;
border: 1px solid #DBDBDB;
box-sizing: border-box;
border-radius: 6px;
color: #fff;
`;

export default Button;
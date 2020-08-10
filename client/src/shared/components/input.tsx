import React from 'react';
import styled from 'styled-components';

function Input(props){

  return(
    <FormInput {...props}/>
  )
}

const FormInput = styled.input`
width: 324px;
height: 40px;
margin: 10px;
background: #FFFFFF;
border: 1px solid #DBDBDB;
box-sizing: border-box;
border-radius: 6px;
padding-left:10px;
`;

export default Input;
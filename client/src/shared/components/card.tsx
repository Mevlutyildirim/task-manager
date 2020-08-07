import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
function Card(props) {
  return (
    <Pano to="/task" {...props}>
      <Caption>Books</Caption>
    </Pano>
  );
}

export function AddCard() {
  return (
    <PanoButton>
      <Button>+</Button>
    </PanoButton>
  );
}

const SharedStyles = css`
  width: 165px;
  height: 100px;
  border-radius: 3px;
  margin-right: 10px;
  display: flex;
`;


const Pano = styled(Link)`
  ${SharedStyles}
  background: ${(props:{background:string}) => props.background}
`;

const PanoButton = styled.div`
  ${SharedStyles}
  background: #b4b4b4;
  font-size: 20px;
`;
const Caption = styled.span`
  display: block;
  padding-left: 10px;
  padding-top: 10px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  text-align: left;
`;

const Button = styled.button`
  margin: auto;
  background: transparent;
  border: none;
  color: #fff;
`;

export default Card;

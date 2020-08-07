import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
function Card() {
  return (
    <Pano to="/task">
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
  background: #0866a2;
  display: flex;
`;

const Pano = styled(Link)`
  ${SharedStyles}
`;

const PanoButton = styled.div`
  ${SharedStyles}
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

import React from "react";
import styled from "styled-components";

function Card() {
  return (
    <Wrapper>
      <Title>Kişisel Panolar</Title>
      <Panos>
        <Pano>
          <PanoCaption>Books</PanoCaption>
        </Pano>
      </Panos>
    </Wrapper>
  );
}

const Wrapper = styled.div`
 padding: 10px 30px;
`;

const Title = styled.h3`
display: block;
padding-left: 10px;
font-size: 16px;
line-height: 24px;
font-weight: 500;
text-align: left;
`;
const Panos = styled.div`
display: flex;
padding: 0 10px;
`;
const Pano = styled.div`
  width: 165px;
  height: 100px;
  border-radius: 3px;
  margin-right: 10px;
  background: #0866a2;
`;
const PanoCaption = styled.span`
display: block;
padding-left: 10px;
padding-top: 10px;
color: #fff;
font-size: 14px;
font-weight: 500;
line-height: 20px;
text-align: left;
`;

export default Card;

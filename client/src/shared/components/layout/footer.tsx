import React from "react";
import styled from "styled-components";

function footer() {
  return (
    <FooterWrapper>
      <span>product by MEVLÜT YILDIRIM</span>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  margin-bottom: 50px;
`;

export default footer;

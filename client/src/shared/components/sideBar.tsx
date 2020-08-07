import React from "react";
import styled from "styled-components";

function SideBar() {
  return (
    <Container>
      <Header></Header>
      <Body></Body>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 340px;
  background: #ebecf0;
  height: 100%;
`;

const Header = styled.div``;

const Body = styled.div``;

export default SideBar;

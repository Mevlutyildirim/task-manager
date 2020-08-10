import React from "react";
import styled from "styled-components";

function SignTitle({ title }) {
  return (
    <Wrapper>
      <Title>{title}</Title>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
const Title = styled.h1``;

export default SignTitle;

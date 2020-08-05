import React from "react";
import styled from "styled-components";
import Input from "components/input";
import Button from "components/button";

function SignInScreen() {
  return (
    <React.Fragment>

      <Card>
        <Input placeholder="tam isim" name="full-name" type="text" />
        <Button title="Sign In" />
      </Card>
    </React.Fragment>
  );
}

const Card = styled.div`
  border: 1px solid #000;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default SignInScreen;

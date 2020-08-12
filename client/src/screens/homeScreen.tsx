import React from "react";
import styled from "styled-components";
import { Team } from "shared/components/team";
import * as Button from "shared/components/button";
const { SecondaryButton } = Button;

function HomeScreen() {
  return (
    <Home>
      <Menu>
        <SecondaryButton title="Add Team" />
      </Menu>
      <Team />
    </Home>
  );
}

const Home = styled.div`
  height: 100%;
  width: 100%;
`;

const Menu = styled.div`
display:flex;
justify-content:flex-end;
padding: 10px;
`;

export default HomeScreen;

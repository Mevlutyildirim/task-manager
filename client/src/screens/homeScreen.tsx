import React from "react";
import styled from "styled-components";
import { Team } from "shared/components/team";
import * as Button from "shared/components/button";
const { SecondaryButton } = Button;

interface teamProps {
  id: number;
  name: string;
}

function HomeScreen() {
  const teams: Array<teamProps> = [
    { id: 1, name: "takim 1" },
    { id: 2, name: "takim 2" },
  ];
  return (
    <Home>
      <Menu>
        <SecondaryButton title="Add Team" />
      </Menu>
      {teams.map((team, idx) => (
        <Team
          id={team.id}
          name={team.name}
          projects={[{ id: 1, name: "deneme" }]}
        />
      ))}
    </Home>
  );
}

const Home = styled.div`
  height: 100%;
  width: 100%;
`;

const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
`;

export default HomeScreen;

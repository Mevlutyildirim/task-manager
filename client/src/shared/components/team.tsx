import React from "react";
import styled from "styled-components";
import Card, { AddCard } from "shared/components/card";

interface Project {
  id: number;
  name: string;
}

interface TeamProps {
  name:string;
  id:number;
  projects: Array<Project>;
}

export const Team: React.FC<TeamProps> = ({ projects, name, id }) => {
  return (
    <Container>
      <Title>{name}</Title>
      <Panos>
        {projects.map((project, idx) =>
          <Card background="red" name={project.name} />
        )}
        <AddCard />
      </Panos>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px 30px;
  max-width: 820px;
  min-width: 300px;
  margin: 20px 40px;
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

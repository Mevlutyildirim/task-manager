import React from "react";
import styled from "styled-components";
import { Team, EmptyHome } from "shared/components";
import * as Button from "shared/components/button";
import { useForm } from 'react-hook-form';
import {FormInput, InputError} from 'shared/components';
const { SecondaryButton } = Button;
interface teamProps {
  id: number;
  name: string;
}

interface CreateTeamFormProps {
  createTeam: (onCreateTeam:string) => void;
}

 const CreateTeamForm:React.FC<CreateTeamFormProps> = ({createTeam}) =>{

  const {register, handleSubmit, errors} = useForm();

  const onSumbitForm = (data) =>{
   console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSumbitForm)}>
     <FormInput
     id="teamName"
     name="teamName"
     ref= {register() }/>
     {errors.teamName && <InputError>{errors.teamName.message}</InputError>}
    </form>
  )

 }
function HomeScreen() {
  const teams: Array<teamProps | null> = [
    { id: 1, name: "takim 1" },
    { id: 2, name: "takim 2" },
  ];
  return (
    <Home>
      <Menu>
        <SecondaryButton title="Add Team" />
      </Menu>
      {teams.length == 0 && <EmptyHome />}
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

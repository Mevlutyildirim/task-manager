import React, {useEffect, useState} from "react";
import styled from "styled-components";
import { Team, EmptyHome, Modal, SignTitle } from "shared/components";
import * as Button from "shared/components/button";
import { useForm } from 'react-hook-form';
import {FormInput, InputError} from 'shared/components';
import { useDocument } from '../shared/hooks';
const { SecondaryButton, PrimaryButton } = Button;
interface teamProps {
  id: number;
  name: string;
}



 const CreateTeamForm:React.FC = () =>{

  const {register, handleSubmit, errors} = useForm();

  const onSumbitForm = (data) =>{
   console.log(data);
  }

  return (
    <FormStyled onSubmit={handleSubmit(onSumbitForm)}>
     <SignTitle title="Create a Team"/>
     <FormInput
     id="teamName"
     name="teamName"
     ref= {register() }/>
     {errors.teamName && <InputError>{errors.teamName.message}</InputError>}
     <PrimaryButton title="submit"/>
    </FormStyled>
  )

 }

 const FormStyled = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
 `
function HomeScreen() {

   useDocument("Home")
   const [isOpen, setOpen] = useState(false);

  const teams: Array<teamProps | null> = [
    { id: 1, name: "takim 1" },
    { id: 2, name: "takim 2" },
  ];
  return (
    <Home>
      <Menu>
        <SecondaryButton title="Add Team"  render={()=>{
          setOpen(true);
        }}/>
      </Menu>
      {isOpen && <Modal width={400} renderContent={()=> {return <CreateTeamForm/>}} />}
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

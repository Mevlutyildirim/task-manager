import React from "react";
import styled from "styled-components";
import {Input, SignTitle} from "shared/components";
import Button from "shared/components/button";
import { useForm } from "react-hook-form";
import {Main, Card} from 'screens/sign.style';

function SignInScreen() {
  const { register, handleSubmit, errors } = useForm();
  const onSumbit = (data:SignInFormProps) => {
    console.log(data);
  };
  return (
    <Main>
    <Card onSubmit={handleSubmit(onSumbit)}>
      <SignTitle title="login"/>
      <Input
        placeholder="e-mail"
        name="e-mail"
        type="e-mail"
        ref={register({ required: true })}
      />
      <Input
        placeholder="password"
        name="password"
        type="password"
        ref={register({ required: true })}
      />
      <Button title="Sign In" />
    </Card>
    </Main>
  );
}

export default SignInScreen;

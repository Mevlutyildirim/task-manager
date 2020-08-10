import React from "react";
import styled from "styled-components";
import Input from "shared/components/input";
import Button from "shared/components/button";
import { useForm } from "react-hook-form";
import {Card} from 'screens/sign.style';

function SignInScreen() {
  const { register, handleSubmit, errors } = useForm();
  const onSumbit = (data) => {
    console.log(data);
  };
  return (
    <Card onSubmit={handleSubmit(onSumbit)}>
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
  );
}

export default SignInScreen;

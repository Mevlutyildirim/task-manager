import React from "react";
import {FormInput, SignTitle} from "shared/components";
import * as Button from "shared/components/button";
import { useForm } from "react-hook-form";
import {Main, Card} from 'screens/sign.style';

const {PrimaryButton} = Button;
function SignInScreen() {
  const { register, handleSubmit, errors } = useForm();
  const onSumbit = (data:SignInFormProps) => {
    console.log(data);
  };
  return (
    <Main>
    <Card onSubmit={handleSubmit(onSumbit)}>
      <SignTitle title="login"/>
      <FormInput
        placeholder="e-mail"
        name="e-mail"
        type="e-mail"
        ref={register({ required: true })}
      />
      <FormInput
        placeholder="password"
        name="password"
        type="password"
        ref={register({ required: true })}
      />
      <PrimaryButton title="Sign In" />
    </Card>
    </Main>
  );
}

export default SignInScreen;

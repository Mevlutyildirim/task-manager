import React, { useState } from "react";
import {FormInput, SignTitle, InputError} from "shared/components";
import * as Button from "shared/components/button";
import { useForm } from "react-hook-form";
import {Main, Card} from 'screens/sign.style';

const {PrimaryButton} = Button;

function SignInScreen() {
  const [isComplete, setComplete] = useState(false);
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
        name="email"
        id="email"
        type="e-mail"
        ref={register({ required: "e-mail is required" })}
      />
      {errors.email && <InputError>{errors.email.message}</InputError>}
      <FormInput
        placeholder="password"
        name="password"
        id="password"
        type="password"
        ref={register({ required: "password is required", minLength:6 })}
      />
      {errors.password && <InputError>{errors.password.message}</InputError>}
      <PrimaryButton title="Sign In" />
    </Card>
    </Main>
  );
}

export default SignInScreen;

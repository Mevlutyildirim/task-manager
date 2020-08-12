import React from "react";
import Input from "shared/components/input";
import * as Button from "shared/components/button";
import { useForm } from "react-hook-form";
import * as Sign from "screens/sign.style";

const { Main, Card } = Sign;
const {PrimaryButton} = Button;
function SignUpScreen() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data:SignUpFormProps) => {
    console.log(data);
  };
  return (
    <Main>
      <Card onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="tam isim"
          name="full-name"
          type="text"
          ref={register({ required: true })}
        />
        <Input
          placeholder="tam isim"
          name="full-name"
          type="text"
          ref={register({ required: true })}
        />
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
        <PrimaryButton title="Sign Up" />
      </Card>
    </Main>
  );
}

export default SignUpScreen;

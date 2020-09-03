import React from "react";
import * as Button from "shared/components/button";
import { useForm } from "react-hook-form";
import * as Sign from "screens/sign.style";
import { FormInput, InputError } from "shared/components";

const { Main, Card } = Sign;
const { PrimaryButton } = Button;
function SignUpScreen() {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: SignUpFormProps) => {
    console.log(data);
  };
  return (
    <Main>
      <Card onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          placeholder="Full name"
          name="fullname"
          id="fullname"
          type="text"
          ref={register({ required: "full name is required" })}
        />
        {errors.fullname && <InputError>{errors.fullname.message}</InputError>}
        <FormInput
          placeholder="User name"
          name="username"
          id="username"
          type="text"
          ref={register({ required: "user name is required" })}
        />
        {errors.username && <InputError>{errors.username.message}</InputError>}
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
          ref={register({ required: "password is required" })}
        />
        {errors.password && <InputError>{errors.password.message}</InputError>}
        <PrimaryButton title="Sign Up" />
      </Card>
    </Main>
  );
}

export default SignUpScreen;

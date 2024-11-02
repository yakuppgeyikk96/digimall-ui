"use client";

import Form from "../Form";
import useSignupFormLogic from "./SignupForm.logic";

export default function SignupForm() {
  const { formItems, handleFormConfirmed } = useSignupFormLogic();

  return <Form items={formItems} onConfirm={handleFormConfirmed} />;
}

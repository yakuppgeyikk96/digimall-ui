import { useMemo, useState } from "react";
import { ISignupFormData } from "./SignupForm.model";
import { IFormItem } from "../Form";
import { signup } from "@/services/auth/signup";

const useSignupFormLogic = () => {
  const [formErrors, setFormErrors] = useState<
    { field: string; message: string }[]
  >([]);

  const handleSignup = async (values: ISignupFormData | undefined) => {
    try {
      const { data, formErrors } = await signup(values);

      if (data) {
        if (!data.success && formErrors) {
          setFormErrors(formErrors || []);
        }
        if (data.success) {
          console.log("Signup successful");
        }
        if (!data.success && !formErrors) {
          console.error("Signup failed");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleFormConfirmed = (values: ISignupFormData | undefined) => {
    setFormErrors([]);
    handleSignup(values);
  };

  const getRelevantErrorMessage = (field: string) => {
    return formErrors.find((error) => error.field === field)?.message || "";
  };

  const formItems = useMemo(() => {
    const items: IFormItem<ISignupFormData>[] = [
      {
        type: "email",
        label: "Email",
        name: "email",
        errorMessage: getRelevantErrorMessage("email"),
      },
      {
        type: "password",
        label: "Password",
        name: "password",
        errorMessage: getRelevantErrorMessage("password"),
      },
      {
        type: "password",
        label: "Confirm Password",
        name: "confirmPassword",
        errorMessage: getRelevantErrorMessage("confirmPassword"),
      },
    ];
    return items;
  }, [formErrors]);

  return {
    formItems,
    handleFormConfirmed,
  };
};

export default useSignupFormLogic;

import { ISignupResponse } from "@/common/models/auth/ISignupResponse";
import { ISignupFormData } from "@/components/common/SignupForm/SignupForm.model";
import { fbAuth } from "@/config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { z } from "zod";

const SignupFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(20),
  confirmPassword: z.string().min(8).max(20),
});

export const signup = async (
  formData: ISignupFormData | undefined
): Promise<ISignupResponse> => {
  try {
    const validatedFields = SignupFormSchema.safeParse({
      email: formData?.email,
      password: formData?.password,
      confirmPassword: formData?.confirmPassword,
    });

    if (!validatedFields.success) {
      const formErrors = validatedFields.error.errors.map((error) => {
        const field = error.path ? (error.path[0] as string) : "";
        const message = error.message;
        return {
          field,
          message,
        };
      });

      return {
        data: {
          success: false,
        },
        formErrors,
        message: "Invalid form data",
        status: 400,
      };
    }

    await createUserWithEmailAndPassword(
      fbAuth,
      validatedFields.data.email,
      validatedFields.data.password
    );

    return {
      data: {
        success: true,
      },
      message: "Signup successful",
      status: 200,
    };
  } catch (error) {
    console.error(error);
    return {
      data: {
        success: false,
      },
      message: "Failed to signup",
      status: 500,
    };
  }
};

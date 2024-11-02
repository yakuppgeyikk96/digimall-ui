import { ISignoutResponse } from "@/common/models/auth/ISignoutResponse";
import { fbAuth } from "@/config/firebase";
import { signOut } from "firebase/auth";

export const signout = async (): Promise<ISignoutResponse> => {
  try {
    await signOut(fbAuth);
    return {
      data: {
        success: true,
      },
      message: "Signout successful",
      status: 200,
    };
  } catch (error) {
    console.error(error);
    return {
      data: {
        success: false,
      },
      message: "Failed to signout",
      status: 500,
    };
  }
};

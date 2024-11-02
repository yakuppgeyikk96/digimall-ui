import { Tab, Tabs } from "@nextui-org/react";
import SignupForm from "../../SignupForm";

export default function AuthTabs() {
  return (
    <div>
      <Tabs
        aria-label="auth-options"
        className="w-full"
        classNames={{
          tabList: "w-full",
        }}
      >
        <Tab key="login" title="Login">
          <p>Login</p>
        </Tab>
        <Tab key="signup" title="Signup">
          <SignupForm />
        </Tab>
      </Tabs>
    </div>
  );
}

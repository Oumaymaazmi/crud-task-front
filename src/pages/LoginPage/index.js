import { useState } from "react";
import FormLayout from "components/FormLayout";
import AppLogin from "containers/AppLogin";

export default function LoginPage() {
  const [statusType, setStatusType] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [isLoginMode, setIsLoginMode] = useState(true);

  const timelineItems = [
    {
      id: 1,
      title: isLoginMode ? "User Login" : "Register",
      subtitle: isLoginMode
        ? "Enter your credentials to access the app"
        : "Create a new account to get started",
      selected: true,
    },
  ];

  return (
    <FormLayout
      sectionName={isLoginMode ? "Login" : "Register"}
      timelineItems={timelineItems}
      statusMessage={statusMessage}
      statusType={statusType}
    >
      <AppLogin
        isLoginMode={isLoginMode}
        setIsLoginMode={setIsLoginMode}
        setStatusType={setStatusType}
        setStatusMessage={setStatusMessage}
      />
    </FormLayout>
  );
}

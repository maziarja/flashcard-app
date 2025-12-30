import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function Authentication() {
  const [activeTab, setActiveTab] = useState<"signIn" | "register">("signIn");
  return (
    <Tabs
      value={activeTab}
      onValueChange={(value) => setActiveTab(value as "signIn" | "register")}
    >
      <TabsList className="w-full">
        <TabsTrigger value="signIn">Sign In</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="signIn">
        <SignInForm />
      </TabsContent>
      <TabsContent value="register">
        <SignUpForm onActiveTab={setActiveTab} />
      </TabsContent>
    </Tabs>
  );
}

export default Authentication;

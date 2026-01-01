import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { useState } from "react";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

function Authentication({
  onOpenChange,
}: {
  onOpenChange: (open: boolean) => void;
}) {
  const [activeTab, setActiveTab] = useState<"signIn" | "register">("signIn");
  return (
    <Tabs
      value={activeTab}
      onValueChange={(value) => setActiveTab(value as "signIn" | "register")}
    >
      <TabsList className="w-full">
        <TabsTrigger value="signIn" className="text-preset-4-regular!">
          Sign In
        </TabsTrigger>
        <TabsTrigger value="register" className="text-preset-4-regular!">
          Register
        </TabsTrigger>
      </TabsList>
      <TabsContent value="signIn">
        <SignInForm onOpenChange={onOpenChange} />
      </TabsContent>
      <TabsContent value="register">
        <SignUpForm onActiveTab={setActiveTab} />
      </TabsContent>
    </Tabs>
  );
}

export default Authentication;

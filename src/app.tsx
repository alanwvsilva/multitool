import { Toast } from "@heroui/react";
import Router from "./router";

export default function App() {
  return (
    <div className="min-h-screen max-w-4xl space-y-8 p-12 mx-auto">
      <Router />
      <Toast.Provider />
    </div>
  );
}

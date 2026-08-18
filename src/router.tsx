import { Route, Switch } from "wouter";
import HomePage from "@/pages/home";
import UuidGeneratorPage from "@/pages/uuid-generator";
import PasswordGeneratorPage from "@/pages/password-generator";
import NotFound from "@/pages/not-found";

export default function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route
        path="/tool/password-generator"
        component={PasswordGeneratorPage}
      />
      <Route path="/tool/uuid-generator" component={UuidGeneratorPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

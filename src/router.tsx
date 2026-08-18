import { Route, Switch } from "wouter";
import HomePage from "@/pages/home";
import UuidGeneratorPage from "@/pages/uuid-generator";
import PasswordGeneratorPage from "@/pages/password-generator";
import NotFound from "@/pages/not-found";
import RuleOfThreePage from "./pages/rule-of-three";

export default function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route
        path="/tool/password-generator"
        component={PasswordGeneratorPage}
      />
      <Route path="/tool/uuid-generator" component={UuidGeneratorPage} />
      <Route path="/tool/rule-of-three" component={RuleOfThreePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

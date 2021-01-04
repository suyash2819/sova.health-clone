import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import HowItWorks from "../Pages/HowItWorks";

const Navigation = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/howitworks" component={HowItWorks} />
    </Switch>
  );
};
export default Navigation;

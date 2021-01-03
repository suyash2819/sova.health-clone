import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import HowItWorks from "./HowItWorks";

const Navigation = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/howitworks" component={HowItWorks} />
    </Switch>
  );
};
export default Navigation;

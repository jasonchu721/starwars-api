import React, {Fragment} from 'react';
import { Switch, Route } from 'react-router-dom';
import People from "./components/People";
import Planets from "./components/Planets";
import PlanetShow from "./components/PlanetShow";
import Navbar from "./components/Navbar";
import Home from "./components/Home"

const App = () => (
  <Fragment>
    <Navbar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/people" component={People} />
    <Route exact path="/planets" component={Planets} />
    <Route exact path="/planets/:id/" component={PlanetShow} />
    </Switch>
  </Fragment>
)

export default App;

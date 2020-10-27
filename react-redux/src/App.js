import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

import Home from "./containers/Home";
import Detail from "./containers/Detail";

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/:id" component={Detail} />
    </Router>
  );
}

export default App;

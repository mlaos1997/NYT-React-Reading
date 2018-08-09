import React from "react";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
  <Router>
    <div>
    <Nav />
    <Books />
    </div>
  </Router>
);

export default App;

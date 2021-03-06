import React from "react";
import Portfolio from "./Pages/Portfolio";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./App.css";
//import "./style.css";
//import "./components/images/19742.jpg";


function App() {
  return (
    <Router className="body">
        <body>
        <Navbar />
        <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
       <Footer />
      </div>
      </body>
    </Router>
  );
};

export default App
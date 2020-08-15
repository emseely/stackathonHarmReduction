import React from "react";
import Routes from "./Routes";
import { Navbar, Footer } from "./components";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;

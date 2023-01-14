import React from "react";

import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { StateContext } from "./context/StateContext";

const App = () => {
  return (
    <div>
      <StateContext>
        <Navbar />
        <Product />
      </StateContext>
    </div>
  );
};

export default App;

import React from "react";
import "./App.css";
import FeaturesPage from "./pages/FeaturesPage";
import ProductsPage from "./pages/ProductsPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TestDrivePage from "./pages/TestDrivePage";

function App() {
  return (
    <div className="parentDiv">
      <BrowserRouter>
        <Routes>
          <Route exact path="/product" element={<ProductsPage />}></Route>
          <Route path="/features" element={<FeaturesPage />}></Route>
          <Route path="/" element={<FeaturesPage />}></Route>
          <Route path="/testdrive" element={<TestDrivePage/> }></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );


  // return (
  //   <div className="App">
  //     <ProductsPage/>
  //     {/* <FeaturesPage/> */}
  //   </div>
  // );
}

export default App;

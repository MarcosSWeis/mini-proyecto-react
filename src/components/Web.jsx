import React from "react";
import Encabezado from "./Encabezado.jsx";
import Banner from "./Banner";
import Products from "./Product";
import Footer from "./Footer";

function Web() {
  return (
    <div className="container">
      <Encabezado />
      <Banner />
      <Products />
      <Footer />
    </div>
  );
}
export default Web;

import React from "react";
import Home from "./components/Home";

import Mv from "./components/Mv";
import Footer from "./components/subC/Footer";
import OurResults from "./components/Results";
import Work from "./work";
import FiveServices from "./components/subC/FiveServices";
const Index = () => {
  return (
    <div className="overflow-x-hidden">
      <Home />

      <Mv />
      <div id="services">
        <FiveServices />
      </div>
      <Work />
      <OurResults />

      <Footer />
    </div>
  );
};

export default Index;

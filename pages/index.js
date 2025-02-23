import React from "react";
import Home from "./components/Home";

import Mv from "./components/Mv";
import Footer from "./components/Footer";
import OurResults from "./components/Results";
import Work from "./components/Work";
import FiveServices from "./components/FiveServices";
import Test from "./components/Test";
import About from "./components/Aboutus";
import Banner from "./components/Banner";
import Ourresults from "./components/Ourresults";
import Industries from "./components/Industries";
const Index = () => {
  return (
    <>
    
    <div className="overflow-x-hidden">
      <Home />
<Banner/>
        <About />
      <Ourresults/>
   

     
    
        <FiveServices />
        <Test/>
        <Industries/>
    
      <Work />
      <OurResults />

      <Footer />
    </div>
    </>
  );
};

export default Index;

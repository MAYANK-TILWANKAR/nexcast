import React from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import OurResults from "./components/Results";
import Work from "./components/Work";
import FiveServices from "./components/FiveServices";
import Test from "./components/Test";
import About from "./components/Aboutus";
import Banner from "./components/Banner";
import Home2 from "./components/Home2";
import Chooseus from "./components/Chooseus";
import Industries from "./components/Industries";

const Index = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <div className="hidden md:block">
          <Home />
        </div>
<Home2/>
        <Banner />
        <About />
        <Chooseus />
        <div id="results">
          <OurResults />
        </div>
        <Industries/>
        <FiveServices />
        <div className="hidden md:block">
          <Test />
        </div>
     
        <Work />
        <Footer />
      </div>
    </>
  );
};

export default Index;

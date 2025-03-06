import React from "react";
import Home from "./components/Home";
import Footer from "./components/Footer";
import OurResults from "./components/Results";
import Work from "./components/Work";
import FiveServices from "./components/FiveServices";
import Test from "./components/Test";
import About from "./components/Aboutus";
import Banner from "./components/Banner";
import Ourresults from "./components/Ourresults";
import Industries from "./components/Industries";
import Chooseus from "./components/Chooseus";
const Index = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <Home />
        <Banner />

        <About />
        <Chooseus/>
        <div id="results">
        <Ourresults />
        </div>
    
        <FiveServices />
        <div className="hidden md:block">
          <Test />
        </div>
        <Industries />
        <Work />
        <OurResults />
        <Footer />
      </div>
    </>
  );
};

export default Index;

import React from "react";
import Banner from "../Banner/Banner";
import HomeNavBar from "../HomeNavbar/HomeNavBar";
import Section1 from "../Sections/Section1/Section1";
import Section2 from "../Sections/Section2/Section2";
import Section3 from "../Sections/Section3/Section3";
import Section4 from "../Sections/Section4/Section4";
import Section5 from "../Sections/Section5/Section5";
import Section6 from "../Sections/Section6/Section6";
import Services from "../Sections/Services/Services";

const Home = () => {
  return (
    <div>

      <Banner></Banner>
      <Section4></Section4>
      <Section2></Section2>
      <Section3></Section3>
      <Services></Services>
      <Section1></Section1>
      <Section5></Section5>
      <Section6></Section6>
    </div>
  );
};

export default Home;


import React,{useState} from "react";

// components

import Navbar1 from "./Navbar1";
import NavIcon from "./NavIcon";
import Services from "./Services";
import Info from "./Info";
import AboutProject from "./AboutProject";
import Awards from "./Awards";
import Contact from "./Contact";
import Footer from "./Footer";
import Menu from "./Menu";

function Router() {
  
  const[isOpen, setIsOpen] = useState(false)
  return (
    <>
          <NavIcon  isOpen={isOpen} setIsOpen={setIsOpen}/>
          {
            isOpen?             
                 <Menu/>
            :
            <>
            <Navbar1 />
          <Services />
          <Info />
          <AboutProject />
          <Awards />
          <Contact />
          <Footer />
          </>
          }
          
    </>
  );
}

export default Router;

import React from "react";
import './header.scss'
import imagenHeader from "../../../assets/NASA_Mars_Rover.jpg"
import imagenHeader2 from "../../../assets/NASA_Mars_Rover2.jpg"


const Header = () => {


    return (
      <>
        <header className="m-header" id='header'>
            <div className="m-header-main" >
                <div  className="m-header-main-title"><div className="m-header-main-title-logo"><img src={imagenHeader2} alt="LandRover-2" /></div>
                <div className="m-header-main-title-logo"><img src={imagenHeader} alt="LandRover-1" /> </div> </div>
                <div className="m-header-main-nav">
                </div>
                <h1 className="m-header-main-title-cont-text">Nasa LandRover</h1>
            </div>
        </header>
      </>
    );
  };
  
export default Header;
  
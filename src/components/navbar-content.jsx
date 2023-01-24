import "./navbar.css"
import { Line } from "./line"
import { Link } from "react-router-dom";
import { LogoText } from "./logo";
import { TestAvatar } from "./avatar";
import ExpandIcon from "../images/expand.svg"
import { MobileMenu } from "./navbar-mobile";
import {isMobile} from 'react-device-detect';
//                   


export function Content(){
    return (
        <div className="navigation">
                <div className="spacer"></div>
                <div className="spacer"></div>

                <div className="navigation-hyper">
                  <Link to={"products"} style={{ textDecoration: 'none', color:"#023436" }}>Products</Link>

                </div>
                <div className="spacer"></div>
                <div className="spacer"></div>
                

                <div className="navigation-hyper">

                  <Link to={"pricing"} style={{ textDecoration: 'none', color:"#023436" }}>Pricing</Link>
                </div>
                <div className="spacer"></div>
                <div className="spacer"></div>


                <div className="navigation-hyper">
                  <Link to={"about"} style={{ textDecoration: 'none', color:"#023436" }}>About</Link>
                </div>
                <div className="spacer"></div>
                <div className="spacer"></div>


            </div>
    )
}
export function NavbarContent(){
    


    if (!isMobile){
    return (
        <>
        <div className="navbar-content">
            
                <div className="spacer"></div>
                <div className="spacer"></div>

                <LogoText />
                <div className="spacer"></div>

                <Content />

                <TestAvatar />

                <div className="spacer"></div>


            
            

          </div>
          <div className="spacer"></div>

          </>
        )   
    } else {
        return (
            <div className="navbar-content">
                
                    <div className="spacer"></div>
                    
    
                    <LogoText />
                    <div className="spacer"></div>

                    <div className="spacer"></div>
                    <div className="spacer"></div>
                    <div className="spacer"></div>
                    <div className="spacer"></div>

                    <MobileMenu />
    
                    <div className="spacer"></div>
    
    
                
                
    
              </div>
            )  
    }
          

}

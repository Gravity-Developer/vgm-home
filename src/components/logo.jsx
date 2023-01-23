import "./navbar.css"
import Logo from "../images/logo.png" 
import VGM from "../images/vgm.png"
export function LogoText(){
    return (
        <div className="logo">
        <img src={Logo} width={"60vw"} height={"60vw"}/>
        <div className="vgm-text">
          <img src={VGM} height={"35vw"} width={"75vh"}/>

        </div>
      </div>
    )
}
import { slide as Menu } from 'react-burger-menu'
import MenuIcon from "../images/menu.svg"
import "./menu.css"
import { Link } from 'react-router-dom'
import SettingIcon from "../images/settings.png"
import { ScrollLink } from '../actions/scrollLink'
  
export function MobileMenu(){
    return (
        <div>
            <Menu noOverlay right push customBurgerIcon={<img src={MenuIcon} className='menu'/>}>
            
            <Link id="home" className="menu-item" to="/">Home</Link>
            <Link id="pricing" className="menu-item" to="pricing">Pricing</Link>
            <Link id="products" className="menu-item" to="products">Products</Link>
            <ScrollLink element="footer">Bonjour</ScrollLink>
            <img src={SettingIcon} width={"15%"} className='menu' onClick={()=>{alert("Settings")}}/>
            
            
            </Menu> 
        </div>
    )
}
import "./navbar.css"

import { Line, LineBlurred } from "./line"
import { NavbarContent } from "./navbar-content"
import { NavbarNotifications } from "./notifications"
export function Navbar(){
    

    return (
      <div className="navbar">
          <NavbarNotifications />
          <Line />
          <NavbarContent />
          <LineBlurred />

        </div>
    )
}
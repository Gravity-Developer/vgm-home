import "./navbar.css"

import { Line, LineBlurred } from "./line"
import { NavbarContent } from "./navbar-content"
export function Navbar(){
    

    return (
      <div className="navbar">
          <div className="navbar-notifications">
            Notifications
          </div>
          <Line />
          <NavbarContent />
          <LineBlurred />

        </div>
    )
}
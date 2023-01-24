import "./navbar.css"
import loginbutton from "../images/login-button.png"
import { Navigate, useNavigate } from "react-router-dom"
export function TestAvatar(){
    const navigate = useNavigate();
    return (
        <div className="avatar-container">
        <img className="avatar" src="https://xsgames.co/randomusers/avatar.php?g=male" height={"40px"} width={"40px"}/>
        <div className="button-container">
            <div className="spacer"></div>

            <button className="login-button">Login</button>
        
        </div>
    </div>
    )
}
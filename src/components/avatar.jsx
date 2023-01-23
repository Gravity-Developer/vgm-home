import "./navbar.css"
import loginbutton from "../images/login-button.png"
import { Navigate, useNavigate } from "react-router-dom"
export function TestAvatar(){
    const navigate = useNavigate();
    return (
        <div className="avatar-container">
        <img className="avatar" src="https://xsgames.co/randomusers/avatar.php?g=male" height={"100vh"} width={"100vh"}/>
        <div className="button-container">
            <div className="spacer"></div>

            <img src={loginbutton} height={"50vh"} onClick={()=>{

                console.log("Login")
                navigate("/about")

            }} />
        
        </div>
    </div>
    )
}
import "./index.css"
import { Line, LineBlurred } from "../../components/line";
import { Navbar } from "../../components/navbar";
import { Main } from "../../components/main";
import { Link } from "react-router-dom";

// LineBlurred escaped formating from navbar ntoifications
export function Home() {
    // TODO : React Hook to hide navbar / notifications when mobile is active
    return (
        <div className="cont">
            <Navbar />
            
          <div className="main">
            <Main />
          

          </div>
          <footer className="footer">
            Footer
          </footer>
        </div>
    );
  }
  
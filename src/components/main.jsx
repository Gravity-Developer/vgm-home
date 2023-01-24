import { Line } from "./line";
import "./main.css"
import PedsImage from "../images/peds.jpeg"
import DiscoverNowButton from "../images/discover-now-button.png"

export function Main(){
    return (
        <div className="main-container container">
            <div className="spacer"></div>
            <div className="spacer"></div>
            <div className="ad-container">
                <div className="spacer"></div>
                <div className="ad-image-container">
                    <div className="spacer"></div>
                    <div className="text-container">
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                        <div className="segment-container">
                            <div className="text-container">
                                <h1>New Year, New You!</h1>
                                <p>Find out new diabetes solutions <br /> to stabalize your future</p>
                                <button className="discover-button">Discover Now!</button>
                            </div>
                            <div className="spacer"></div>
                            <div className="spacer"></div>
                            <div className="spacer"></div>

                        </div>
                        <div className="spacer"></div>
                        <div className="spacer"></div>
                    </div>
                    <div className="spacer"></div>
                    <div className="spacer"></div>

                    <div className="image-container">
                        <img src={PedsImage} height={"100%"} width={"100%"}/>
                    </div>
                </div>
                <div className="spacer"></div>
            </div>
            <Line />
            <div className="spacer">
                This is below
            </div>

        </div>
        
    )
}
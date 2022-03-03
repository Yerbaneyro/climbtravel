import { GiCheckMark } from "react-icons/gi";
import climbing from "../../img/climbing.mp4";
import "./video-header.css";

export default function VideoHeader() {
    return (
        <div className="video">
            <div className="video__confidence-link">
                <p>
                    <GiCheckMark />
                    Book with confidence
                </p>
            </div>
            <h2>Unfrogettable Climbing Adventures</h2>
            <video autoPlay loop muted className="video__video">
                <source src={climbing} type="video/mp4" />
            </video>
        </div>
    );
}

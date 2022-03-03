import React from "react";
import "./App.css";
import Header from "./components/header/header";
import VideoHeader from "./components/video-header/video-header";

function App() {
    return (
        <div className="App">
            <Header />
            <VideoHeader />
            <div className="icons">
                <h3>An adventure travel company you can trust</h3>
                <p>
                    There's a reason why 96% of customers say they'd book an
                    adventure with us again.
                </p>
            </div>
        </div>
    );
}

export default App;

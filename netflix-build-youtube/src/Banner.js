import React from "react";
import './Banner.css';

function Banner() {
    return (
        <header className="banner" style={{
            backgroundImage: `url("https://e0.pxfuel.com/wallpapers/501/336/desktop-wallpaper-movie-poster-cool-movie-posters.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center center"
        }}>
            <div className="banner_contents">
                <h1 className="banner_title">Movie Name</h1>
                <div className="banner_buttons">
                    <button className="banner_button">Play</button>
                    <button className="banner_button">My list</button>
                </div>

                <h1 className="banner_description">This will be the test description</h1>

                <div className="banner--fadebottom" />
            </div>
            
        </header>
    );
}

export default Banner ;
"use client";

import React, { useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const UpperArea = () => {
    const [imageSrc, setImageSrc] = useState("profile/Sonic-Profile.png");

    const handleImageChange = () => {
        setImageSrc((prevSrc) =>
            prevSrc === "profile/Sonic-Profile.png"
                ? "profile/cat.jpg"
                : "profile/Sonic-Profile.png"
        );
    };

    const toggleTheme = () => {
        document.body.classList.toggle("dark-mode");
        handleImageChange(); // Toggle the image
    };

    return (
        <div className="upper-area">
            <div className="theme">
                <img id="toggleTheme" src="theme/dark-light-mode.png" onClick={toggleTheme} />
            </div>
            <LeftSide />
            <RightSide imageSrc={imageSrc} />
        </div>
    );
};

export default UpperArea;

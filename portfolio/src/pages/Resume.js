import React from "react";
import '../styles/Resume.css';

export default function myResume() {
    return ( // added link to my resume in an a tag
        <div className="resume-container">
            <h1 className="title">Resume</h1>

            <a className="link" href="https://1drv.ms/w/c/ee89a545781b7692/EZJ2G3hFpYkggO44CAAAAAABXg6LdkulDex_PHyz9ewyWg?e=YagTPc">Download Resume</a>
        </div>
    )
}

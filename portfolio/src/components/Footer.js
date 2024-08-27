import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css";

export default function myFooter() {
    return ( //adding a tags to the icons for the url
        <div className="footer">
            <div className="media">
            <a href="https://github.com/siddz415"><GitHubIcon/></a>
              <a href="https://www.linkedin.com/in/siddharthdravid/"><LinkedInIcon/></a>
              <a href="mailto:sdravid@yahoo.com"><EmailIcon/></a>
            </div>
        </div>
    )
}


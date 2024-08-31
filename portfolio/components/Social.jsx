import Link from "next/link";
import { faGithu, faLinkedin } from "react-icons/fa";

const socials = [
    {
      path: "https://github.com/siddz415",
      icon: <faGithub/>,
    },
    {
      path: "https://www.linkedin.com/siddharthdravid/",
      icon: <faLinkedin />,
    },
]

const Social = ({ containerStyles, iconStyles }) => {
    return (
      <div className={containerStyles}>
        {socials.map((item, index) => {
          return (
            <Link href={item.path} key={index} className={iconStyles}>
              {item.icon}
            </Link>
          );
        })}
      </div>
    );
  };
  
  export default Social;
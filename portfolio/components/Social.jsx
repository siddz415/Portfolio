import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
    {
      path: "https://github.com/siddz415",
      icon: <FaGithub/>,
    },
    {
      path: "https://www.linkedin.com/in/siddharthdravid/",
      icon: <FaLinkedin />,
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
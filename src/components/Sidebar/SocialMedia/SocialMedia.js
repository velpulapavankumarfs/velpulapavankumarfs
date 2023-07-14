import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {github, instagram, linkdin, twitter} from 'utils/url';
import './socialmedia.scss';

const SocialMedia = () => {
  const handleNavigation = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="network">
        <FontAwesomeIcon className="icon" onClick={()=>handleNavigation(github)} icon={faGithub} />
        <FontAwesomeIcon className="icon" onClick={()=>handleNavigation(instagram)} icon={faInstagram} />
        <FontAwesomeIcon className="icon" onClick={()=>handleNavigation(linkdin)} icon={faLinkedin} />
        <FontAwesomeIcon className="icon" onClick={()=>handleNavigation(twitter)} icon={faTwitter} />
    </div>
  );
};

export default SocialMedia;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './socialmedia.scss';

const SocialMedia = () => {
  return (
    <div className="network">
        <FontAwesomeIcon className="icon" icon={faGithub} />
        <FontAwesomeIcon className="icon" icon={faInstagram} />
        <FontAwesomeIcon className="icon" icon={faTwitter} />
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
    </div>
  );
};

export default SocialMedia;

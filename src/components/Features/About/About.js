import { Element} from 'react-scroll';
import { summary } from 'utils/career';
import './about.scss';

const About = ()=>{
    return (
        <Element name="about"  className="about">
        <p className="summary">{summary}</p>
        <p className="summary">{summary}</p>
        <p className="summary">{summary}</p>
        <p className="summary">{summary}</p>
        </Element>
    )
}
export default About;

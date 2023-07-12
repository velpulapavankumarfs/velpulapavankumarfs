import { Element} from 'react-scroll';
import { summary } from 'utils/career';
import './about.scss';

const About = ()=>{
    const renderSummary=()=>{
       return summary.map(item=><p className="summary" dangerouslySetInnerHTML={{ __html: item }} />)

    }
    return (
        <Element name="about"  className="about">
            {renderSummary()}
        </Element>
    )
}
export default About;

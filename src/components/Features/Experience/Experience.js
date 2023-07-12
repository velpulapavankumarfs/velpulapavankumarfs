import { Element } from "react-scroll";
import { experiences } from "utils/career";
import Card from "components/common/Card/Card";
import "./experience.scss";

function Experience() {
  const renderExperiences = () =>
    experiences.map((item, index) => <Card key={index} data={item} />);

  return (
    <Element name="experience" className="experience">
      {renderExperiences()}
    </Element>
  );
}

export default Experience;

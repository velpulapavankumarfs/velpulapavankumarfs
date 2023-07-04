import { Element } from "react-scroll";
import { experiences } from "utils/career";
import "./experience.scss";

function Experience() {
  const renderExperiences = () =>
    experiences.map((item, index) => <Card data={item} />);

  return (
    <Element
      name="experience"
      className="experience" >
      {renderExperiences()}
    </Element>
  );
}

const Card = ({ data }) => {
  const { title, startDate, endDate, jobDuties, url, tools } = data;

  const handleNavigation = () => {
    window.open(url, '_blank');
  };

  const renderTools = () =>
    tools.map((item, index) => <button key={index} className="btn">{item}</button>);
  return (
    <div className="card flex" onClick={handleNavigation}>
      <div className="box-33">
      <p className="para upperCase">
        {startDate} - {endDate}
      </p>
      </div>

      <div className="box-66">
        <h2 className="title ">{title}</h2>
        <p className="para">{jobDuties}</p>
        {renderTools()}
      </div>
    </div>
  );
};

export default Experience;

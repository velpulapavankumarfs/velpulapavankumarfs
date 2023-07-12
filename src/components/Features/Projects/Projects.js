import { Element } from "react-scroll";
import Card from "components/common/Card/Card";
import { projects } from "utils/career";

const Projects = () => {
  const renderProjects = () =>
    projects.map((item, index) => <Card key={index} data={item} />);

  return (
    <Element name="projects" className="projects">
      {renderProjects()}
    </Element>
  );
};
export default Projects;

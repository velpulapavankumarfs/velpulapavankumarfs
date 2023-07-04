import About from "components/Features/About/About";
import Experience from "components/Features/Experience/Experience";
import Projects from "components/Features/Projects/Projects";
import './content.scss';

const Content = ()=>{
    return (
        <div className="content">
          <About />
          <Experience />
          <Projects />
        </div>
    )
}

export default Content;

import { motto } from 'utils/career';
import "./title.scss";

const Title = () => {
  return (
    <div className="container">
      <h1 className="name">Pavan Velpula</h1>
      <h2  className="role">Web Developer at eTrade</h2>
      <p  className="motto">{motto}</p>
    </div>
  );
};

export default Title;

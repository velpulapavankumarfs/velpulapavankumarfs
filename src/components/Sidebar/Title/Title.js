import { name, JobTitle, motto } from 'utils/career';
import "./title.scss";

const Title = () => {
  return (
    <div className="container">
      <h1 className="name">{name}</h1>
      <h2  className="role">{JobTitle}</h2>
      <p  className="motto">{motto}</p>
    </div>
  );
};

export default Title;

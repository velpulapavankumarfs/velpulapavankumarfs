import React from "react";
import "./card.scss";

const Card = ({ data }) => {
  const {
    title,
    startDate,
    endDate,
    description,
    url,
    tools,
    hasImage,
    imageUrl,
  } = data;

  const handleNavigation = () => {
    window.open(url, "_blank");
  };

  const renderOverview = () => {
    return !hasImage ? (
      <p className="para dates">
        {startDate} - {endDate}
      </p>
    ) : (
      <img alt="Project" src={imageUrl} />
    );
  };

  const renderDescription = () => {
    return (
      <React.Fragment>
        <h2 className="title ">{title}</h2>
        <p className="para">{description}</p>
      </React.Fragment>
    );
  };

  const renderTools = () =>
    tools.map((item, index) => (
      <button key={index} className="btn">
        {item}
      </button>
    ));

  return (
    <div className="card flex" onClick={handleNavigation}>
      <div className="box-33">{renderOverview()}</div>
      <div className="box-66">
        {renderDescription()}
        {renderTools()}
      </div>
    </div>
  );
};

export default Card;

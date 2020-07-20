import React from "react";

const PopUpMessage = (props) => {
  return (
    <React.Fragment>
      <div className="header">{props.title}</div>
      <div className="content">{props.content}</div>
      <div className="actions">{props.actions}</div>
    </React.Fragment>
  );
};

export default PopUpMessage;

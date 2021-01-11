import React from "react";
import omit from "lodash/omit";
import { Spinner } from "reactstrap";
const Loading = (props) => {
  //type: border ou grow
  const { center } = props;
  return (
    <div
      style={{
        ...(center ? { position: "fixed", top: "50vh", left: "50vw" } : {}),
      }}
    >
      <Spinner type="border" color="primary" {...omit(props, ["center"])} />
    </div>
  );
};

export default Loading;

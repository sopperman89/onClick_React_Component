import React from "react";

const ViewOne = ({ onClick }) => (
  <div>
    View 1 <br />
    <button onClick={() => onClick("view2")}>Go to view 2</button>
  </div>
);

export default ViewOne;

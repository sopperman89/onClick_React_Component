import React from "react";

const ViewTwo = ({ onClick }) => (
  <div>
    View 2 <br />
    <button onClick={() => onClick("view1")}>Go to view 1</button>
  </div>
);

export default ViewTwo;

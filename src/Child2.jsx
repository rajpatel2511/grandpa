import React, { useContext } from "react";
import { MyContext } from "./MyContext";

const Child2 = () => {
  const value = useContext(MyContext);

return (
    <div className="component" >
      <h4>Child2</h4>
      <p>{value}</p>
    </div>
  );
};

export default Child2;
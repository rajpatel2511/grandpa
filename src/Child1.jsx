import React, { useContext } from "react";
import { MyContext } from "./MyContext";

const Child1 = () => {
  const value = useContext(MyContext);

return (
    <div className="component">
      <h4>Child1</h4>
      <p>{value}</p>
    </div>
  );
};
export default Child1;
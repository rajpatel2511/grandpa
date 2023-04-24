import React, { useState } from "react";
import Parent from "./Parent";
import { MyContext } from "./MyContext";

export const Grandparent = () => {
const [value, setValue] = useState("hello");

return (
    <MyContext.Provider value={value}>
      <div className="component">
        <h2>Grandparent</h2>
        <Parent />
      </div>
    </MyContext.Provider>
  );
};
export default Grandparent
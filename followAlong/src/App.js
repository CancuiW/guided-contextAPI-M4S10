import React, { useState } from "react";
import MyContext from './Context/MyContext'
import { data } from "./data";
import FamilyButton from "./components/FamilyButton";

import FamilyTree from "./components/FamilyTree";
import "./styles.scss";

export default function App() {
  const [families] = useState(data);
  const [activeFamily, setActiveFamily] = useState(families[0]);

  return (
    <div className="App">
      {/* value can not only contain a {value},but also can contain an {object}  */}
      <MyContext.Provider value={{activeFamily:activeFamily,setActiveFamily:setActiveFamily,families:families}}>
          <FamilyButton />     
          {activeFamily && <FamilyTree  />}
      </MyContext.Provider>
     
    </div>
  );
}
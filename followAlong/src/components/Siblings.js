import React, { useContext } from "react";
import MyContext from './../Context/MyContext'
const Siblings = () => {
  const { activeFamily } = useContext(MyContext)
  return (
    <section className="parents">
      {activeFamily.siblings.map((p) => (
        <div className="person" key={p.name}>
          <img width="150" src={p.img} alt={p.name} />
          <strong>{p.name}</strong>
        </div>
      ))}
    </section>
  );
};

export default Siblings;
import React, {useContext}from 'react';
import MyContext from './../Context/MyContext'

const Parents = ()=> {
  const { activeFamily } = useContext(MyContext)
  return (
    <section className="parents">
      {activeFamily.parents.map(p => (
        <div className="person" key={p.name}>
          <img width="150" src={p.img} alt={p.name} />
          <strong>{p.name}</strong>
        </div>
      ))}
    </section>
  );
};

export default Parents;

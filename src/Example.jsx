import React, { useState } from "react";

const Example = () => {

  const [country, setCountry] =useState(1)
  const options = [{Country:"BD", city:["Rajshahi", "Dhaka"]}, {Country:"India", city:["djang", "hangar"]}, {Country:"Usa", city:["new York", "thailand"]}];

  
  return <div>
    <select  onClick={(e)=>{setCountry(e.target.value)}}>
      {options.map((item, i)=><option value={i}   key={i}>{item.Country}</option>)}
    </select>
    <select name="" id="">
      {
        options[country].city.map((itm, i)=><option value={i} key={i}>{itm}</option>)
      }
    </select>
  </div>;
};

export default Example;

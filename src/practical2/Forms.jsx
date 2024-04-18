import React, { useState } from "react";

const Forms = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (data.name.length <= 0) {
      console.log("ples name atloest 1 car");
    } else if (data.email.length <= 0) {
      console.log("ples email atloest 1 car");
    } else {
      console.log(data.name);
      console.log(data.email);
      setData({
        name: "",
        email: "",
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">name</label>
          <input type="text" name="name" id="name" value={data.name} onChange={(e) => handleChange(e)} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" value={data.email} onChange={(e) => handleChange(e)} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Forms;

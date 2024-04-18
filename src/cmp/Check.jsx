import { useState } from "react";
import {data} from "../assets/Data"

const Check = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [myData, setMyData] = useState(data);

  const handleDelete = (index) => {
    const updatedData = myData.filter((_, i) => i !== index);
    setMyData(updatedData);
  };

  const handleCheck = (index) => {
    setCheckedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      <h3>Check and delete data</h3>
      <ul>
        {myData?.map((name, i) => {
          return (
            <li key={name.id}>
              <input
                type="checkbox"
                name="check"
                id={`checkbox-${i}`}
                onChange={() => handleCheck(i)}
                checked={checkedItems[i] || false}
              />
              <label htmlFor={`checkbox-${i}`}>{name.name}</label>
              {checkedItems[i] && <button onClick={() => handleDelete(i)}>X</button>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Check;

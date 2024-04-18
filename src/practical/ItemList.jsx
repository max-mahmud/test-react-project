import React, { useState } from "react";

function ItemList() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [updateText, setUpdateText] = useState();
  const [updateIndex, setUpdateIndex] = useState(null);
  const [open, setOpen] = useState(false);

  const addItem = () => {
    setItems([...items, { text: newItem, completed: false }]);
    setNewItem("");
  };

  const toggleComplete = (index) => {
    const updatedItems = [...items];
    updatedItems[index].completed = !updatedItems[index].completed;
    setItems(updatedItems);
  };
  // const toggleComplete = (index) => {
  //   setItems((prevItems) =>
  //     prevItems.map((item, i) => (i === index ? { ...item, completed: !item.completed } : item))
  //   );
  // };
  const removeItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    // const updateItem = items.filter((item, i) => i !== index);
    // setItems(updateItem);
  };

  const updateData = () => {
    if (updateIndex !== null) {
      const updatedItems = [...items];
      updatedItems[updateIndex].text = updateText;
      setItems(updatedItems);
      setUpdateText(""); // Clear the update text input after updating
      setUpdateIndex(null); // Reset the update index
      setOpen(!open);
    }
  };

  return (
    <div>
      <h1>Item List</h1>

      {open ? (
        <>
          <input
            type="text"
            value={updateText}
            onChange={(e) => setUpdateText(e.target.value)}
            placeholder="Update Text"
          />
          <button onClick={updateData}>Update Data</button>
        </>
      ) : (
        <>
          <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
          <button onClick={addItem}>Add Item</button>
        </>
      )}

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item.text}</span>
            <button onClick={() => toggleComplete(index)}>{item.completed ? "Undo" : "Complete"}</button>
            <button onClick={() => removeItem(index)}>Remove</button>
            <button
              onClick={() => {
                setUpdateText(item.text);
                setOpen(!open);
                setUpdateIndex(index);
              }}
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;

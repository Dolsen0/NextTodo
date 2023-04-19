import React, { useState } from "react";

function List() {
  const [list, setList] = useState([]);
  const [newItem, setNewItem] = useState("");

  const handleClick = (event) => {
    event.preventDefault();
    setList([...list, newItem]);
    setNewItem("");
  };

  const handleInputChange = (event) => {
    setNewItem(event.target.value);
  };

  const handleDelete = (index) => {
    setList(list.filter((item, i) => i !== index));
  };

  return (
    <div className="List-container">
      <div className="List">
        <ul>
          {list.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleDelete(index)}>x</button>
            </li>
          ))}
        </ul>
        <form className="List-form" onSubmit={handleClick}>
          <input
            type="text"
            placeholder="add new todo item"
            className="List-input"
            value={newItem}
            onChange={handleInputChange}
          />
          <button type="submit" className="List-button">
            add
          </button>
        </form>
      </div>
    </div>
  );
}

export default List;
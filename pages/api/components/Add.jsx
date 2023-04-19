import React from "react";
import { useState } from "react";


function Add() {
    const [items, setItems] = useState([])
    const [input, setInput] = useState('')
    const handleClick = () => {
        console.log('yello')
    }


  return (
    <div>
      <form>
        <input type="text" placeholder="Go to store" />
      </form>
      <button type="submit" onClick={handleClick}>Add</button>
    </div>
  );
}

module.exports = Add;

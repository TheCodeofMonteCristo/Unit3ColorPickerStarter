// Write your Color component here
/*
const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">{/* colors go here *//*</div>
    </div>
  );
};

export default App;*/



//New Code Below:


import React, { useState } from 'react';

// Color Component
const Color = ({ color, setSelectedColor, selectedColor }) => {
  return (
    <div 
      className={`${color} ${color === selectedColor ? 'selected' : ''}`} 
      onClick={() => setSelectedColor(color)}
    ></div>
  );
};

// Picker Component
const Picker = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div>
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color color="yellow" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color color="green" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
        <Color color="black" setSelectedColor={setSelectedColor} selectedColor={selectedColor} />
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div>
      <Picker />
    </div>
  );
};

export default App;




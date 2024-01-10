import React, { useState } from 'react';

const TextBox = () => {
  const [textAreas, setTextAreas] = useState([
    // Initial set of textareas
    { id: 1, placeholder: 'write a chorus'},
    { id: 2, placeholder: 'write a verse' },
    { id: 3, placeholder: 'write a chorus' },
    { id: 4, placeholder: 'write a verse' },
    { id: 5, placeholder: 'write a bridge' },
  ]);

  const handleAddClick = () => {
    const newId = textAreas.length + 1;
    const newTextArea = { id: newId, placeholder: 'New textarea' };
    setTextAreas([...textAreas, newTextArea]);
  };

  const handleDeleteClick = (idToDelete) => {
    const updatedTextAreas = textAreas.filter((area) => area.id !== idToDelete);
    setTextAreas(updatedTextAreas);
  };

  return (
    <div className="textBoxSection">
      {textAreas.map((area) => (
        <div className="textArea" key={area.id}>
          <textarea
            placeholder={area.placeholder}
            name={`textBox${area.id}`}
            id={`textBox${area.id}`}
            cols="30"
            rows="10"
          ></textarea>
          <button className='delete-btn' onClick={() => handleDeleteClick(area.id)}>Delete</button>
        </div>
      ))}
      <button id='add-btn' onClick={handleAddClick}>PLUS SIGN</button>
    </div>
  );
};

export default TextBox;

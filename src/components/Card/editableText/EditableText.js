import React from "react";

const EditableText = ({ editable, value, editValue }) => {
  return (
    <div>
      {editable ? (
        <input
          type='text'
          onChange={event => editValue(event.target.value)}
          value={value}
        />
      ) : (
        <p>{value}</p>
      )}
    </div>
  );
};

export default EditableText;

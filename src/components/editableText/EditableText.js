import React from "react";

const EditableText = ({ editable, value, editValue, style }) => {
  return (
    <div>
      {editable ? (
        <input
          type='text'
          onChange={event => editValue(event.target.value)}
          value={value}
        />
      ) : (
        <p className={style}>{value}</p>
      )}
    </div>
  );
};

export default EditableText;

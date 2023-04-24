import React from 'react';

const FileAdder = ({ id, label, onAddFile }) => {
  const onChange = (e) => {
    onAddFile(e.target.files);
  };

  return (
    <div className="file_adder_wrapper">
      {label && <label htmlFor={id}></label>}
      <input id={id} type="file" multiple onChange={onChange} accept="image/png, image/jpeg" />
    </div>
  );
};

export default FileAdder;

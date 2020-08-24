import React from 'react';

const Btn = ({ bg, onClickProp, title, isDisable }) => {
  return (
    <div>
      <button
        type='submit'
        disabled={isDisable}
        style={{
          width: 120,
          height: 40,
          backgroundColor: bg,
          fontFamily: '"Special Elite", cursive',
          borderColor: bg,
          // border: 'none',
          borderRadius: 4,
          marginBottom: 18,
          marginTop: 10,
        }}
      >
        {title}
      </button>
    </div>
  );
};
export default Btn;

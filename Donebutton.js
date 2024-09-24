import React from 'react';

function DoneButton({ onDone }) {
  return (
    <button onClick={onDone} style={{ marginTop: '20px', padding: '10px', backgroundColor: 'green', color: 'white', fontSize: '16px' }}>
      Done
    </button>
  );
}

export default DoneButton;

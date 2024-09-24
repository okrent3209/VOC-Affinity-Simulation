import React from 'react';
import { useDrop } from 'react-dnd';

function AffinityGroup({ group, index, onLabelChange }) {
  const [{ isOver }, drop] = useDrop({
    accept: 'comment',
    drop: (item) => {
      if (item && item.comment) {
        onLabelChange(index, item.comment);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        minHeight: '100px',
        minWidth: '150px',
        border: '1px solid black',
        padding: '10px',
        margin: '5px',
        backgroundColor: isOver ? 'lightblue' : 'white',
      }}
    >
      <input
        type="text"
        placeholder={`Label Group ${index + 1}`}
        onChange={(e) => onLabelChange(index, e.target.value)}
        style={{ marginBottom: '10px', width: '100%' }}
      />
      {group.length > 0 && (
        <ul>
          {group.map((comment, i) => (
            <li key={i}>{comment}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AffinityGroup;

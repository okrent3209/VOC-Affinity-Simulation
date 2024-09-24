import React from 'react';
import { useDrag } from 'react-dnd';

function CommentCard({ comment, groups, onAddToGroup }) {
  const [{ isDragging }, drag] = useDrag({
    type: 'comment',
    item: { comment },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: '10px',
        margin: '5px',
        backgroundColor: 'lightgray',
        border: '1px solid #ccc',
        cursor: 'move',
      }}
    >
      {comment}
    </div>
  );
}

export default CommentCard;

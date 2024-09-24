import React, { useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import CommentCard from './CommentCard';
import AffinityGroup from './AffinityGroup';
import DoneButton from './DoneButton';

// Mock data simulating 25 warranty comments
const warrantyComments = [
  "The battery life is too short.",
  "The product broke after 2 months.",
  "Customer service was unresponsive.",
  "The screen is very dim.",
  "Product arrived late.",
  "There are software bugs causing crashes.",
  "The device is overheating.",
  "Warranty claim process was too slow.",
  "The keyboard stopped working.",
  "The product is not durable.",
  // Add more comments as needed
];

function App() {
  const [groups, setGroups] = useState([]);
  const [groupLabels, setGroupLabels] = useState({});
  
  // Function to add a new comment to a group
  const handleAddToGroup = (comment, groupIndex) => {
    setGroups(prevGroups => {
      const newGroups = [...prevGroups];
      if (!newGroups[groupIndex]) newGroups[groupIndex] = [];
      newGroups[groupIndex].push(comment);
      return newGroups;
    });
  };

  // Function to create a new group
  const createNewGroup = () => {
    setGroups([...groups, []]);
  };

  // Function to handle labeling of groups
  const handleLabelChange = (index, label) => {
    setGroupLabels(prevLabels => ({ ...prevLabels, [index]: label }));
  };

  // Function to handle "Done" button click
  const handleDone = () => {
    console.log("Affinity Diagram Results:", { groups, groupLabels });
    alert("You've completed the task! Check the console for your groups.");
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ padding: '20px' }}>
        <h1>Warranty Comment Affinity Diagram Simulation</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          {/* Comments Section */}
          <div>
            <h2>Comments</h2>
            {warrantyComments.map((comment, index) => (
              <CommentCard key={index} comment={comment} groups={groups} onAddToGroup={handleAddToGroup} />
            ))}
          </div>

          {/* Groups Section */}
          <div>
            <h2>Affinity Groups</h2>
            <button onClick={createNewGroup}>Create New Group</button>
            <div style={{ marginTop: '10px' }}>
              {groups.map((group, index) => (
                <AffinityGroup
                  key={index}
                  group={group}
                  index={index}
                  onLabelChange={handleLabelChange}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Done Button */}
        <DoneButton onDone={handleDone} />
      </div>
    </DndProvider>
  );
}

export default App;

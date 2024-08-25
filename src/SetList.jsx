import React from "react";

const SetList = ({ practices }) => {
  return (
    <div>
      <h2>Set List</h2>
      <ul>
        {practices.map((practice, index) => (
          <li key={index}>
            {practice.reps}x{practice.distance}m {practice.stroke} - {practice.rounds} rounds
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SetList;

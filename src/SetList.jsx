import React from "react";
import "./SetList.css";

const SetList = ({ practices }) => {
  return (
    <div>
      <h2>Practice Sets</h2>
      <ul>
        {practices.map((practice, index) => (
          <li key={index}>
            {practice.reps}x{practice.distance}m {practice.stroke} - {practice.rounds} rounds ({practice.type})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SetList;

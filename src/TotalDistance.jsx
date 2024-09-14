import React from "react";

const TotalDistance = ({ practices }) => {
  const totalDistance = practices.reduce((acc, practice) => {
    return acc + practice.reps * practice.distance * practice.rounds;
  }, 0);

  return (
    <div>
      <h2>Total Distance</h2>
      <p>{totalDistance} meters</p>
    </div>
  );
};

export default TotalDistance;

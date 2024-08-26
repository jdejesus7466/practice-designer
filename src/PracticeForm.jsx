import React, { useState } from "react";
import PracticeList from "./SetList";
import TotalDistance from "./TotalDistance";

const PracticeForm = () => {
  const [reps, setReps] = useState("");
  const [distance, setDistance] = useState("");
  const [stroke, setStroke] = useState("");
  const [rounds, setRounds] = useState("");
  const [practices, setPractices] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPractice = { reps, distance, stroke, rounds };
    setPractices([...practices, newPractice]);
    setReps("");
    setDistance("");
    setStroke("");
    setRounds("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Reps (e.g., 4)"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Distance (m)"
          value={distance}
          onChange={(e) => setDistance(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Stroke (e.g., Freestyle)"
          value={stroke}
          onChange={(e) => setStroke(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Rounds"
          value={rounds}
          onChange={(e) => setRounds(e.target.value)}
          required
        />
        <button type="submit">Add Set</button>
      </form>
      <PracticeList practices={practices} />
      <TotalDistance practices={practices} />
    </div>
  );
};

export default PracticeForm;

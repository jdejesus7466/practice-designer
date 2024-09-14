import React, { useState } from "react";
import "./PracticeForm.css";
import PracticeList from "../SetList"; 
import TotalDistance from "../TotalDistance";

const PracticeForm = () => {
  const [reps, setReps] = useState("");
  const [distance, setDistance] = useState("");
  const [stroke, setStroke] = useState("Freestyle");
  const [rounds, setRounds] = useState("");
  const [type, setType] = useState("Swim");
  const [practices, setPractices] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPractice = { reps, distance, stroke, rounds, type };
    setPractices([...practices, newPractice]);
    setReps("");
    setDistance("");
    setStroke("Freestyle");
    setRounds("");
    setType("Swim");
  };

  return (
    <div className="practice-container">
      {/* Inputs Box */}
      <div className="box input-container">
        <form onSubmit={handleSubmit} className="practice-form">
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
          <select
            value={stroke}
            onChange={(e) => setStroke(e.target.value)}
            required
          >
            <option value="Freestyle">Freestyle</option>
            <option value="Backstroke">Backstroke</option>
            <option value="Breaststroke">Breaststroke</option>
            <option value="Butterfly">Butterfly</option>
          </select>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            required
          >
            <option value="Swim">Swim</option>
            <option value="Drill">Drill</option>
            <option value="Build">Build</option>
            <option value="Descend">Descend</option>
            <option value="Ascend">Ascend</option>
            <option value="Kick">Kick</option>
            <option value="All-Out">All-Out</option>
          </select>
          <input
            type="number"
            placeholder="Rounds"
            value={rounds}
            onChange={(e) => setRounds(e.target.value)}
            required
          />
          <button type="submit">Add Set</button>
        </form>
      </div>

      <div className="box output-container">
        { <PracticeList practices={practices} /> }
      </div>

      <div className="box output-container">
        { <TotalDistance practices={practices} /> }
      </div>
    </div>
  );
};

export default PracticeForm;

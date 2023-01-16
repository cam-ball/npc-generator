import "./App.css";
import data from "./constants.json";
import Table from "./components/table";
import { useState } from "react";

const roll = () => {
  return Math.floor(Math.random() * 20);
};

const Sentence = ({ adjective, descriptor, quirk }) => {
  return (
    <h2>
      A <span className="keyword">{adjective}</span>{" "}
      <span className="keyword">{descriptor}</span> who{" "}
      <span className="keyword">{quirk}</span>.
    </h2>
  );
};

function App() {
  const { adjectives, descriptors, quirks } = data;
  const [adj, setAdj] = useState(roll());
  const [desc, setDesc] = useState(roll());
  const [quirk, setQuirk] = useState(roll());
  const [showTable, setShowTable] = useState(false);

  const reroll = () => {
    setAdj(roll());
    setDesc(roll());
    setQuirk(roll());
  };

  return (
    <div className="App">
      <div className="generator">
        <span className="leader">What about a...</span>
        <Sentence
          adjective={adjectives[adj]}
          descriptor={descriptors[desc]}
          quirk={quirks[quirk]}
        />
        <div className="buttons">
          <button onClick={() => reroll()}>hit me again</button>
          <button onClick={() => setShowTable(!showTable)}>show me the table</button>
        </div>
      </div>
    {showTable && (
      <Table
        adjectives={adjectives}
        descriptors={descriptors}
        quirks={quirks}
      />
    )}
    </div>
  );
}

export default App;

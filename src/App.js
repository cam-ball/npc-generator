import data from "./constants.json";
import Table from "./components/table";
import Generator from "./components/generator";
import { useState } from "react";

const roll = () => {
  return Math.floor(Math.random() * 20);
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
      <Generator
        adjectives={adjectives}
        adj={adj}
        descriptors={descriptors}
        desc={desc}
        quirks={quirks}
        quirk={quirk}
        handleReroll={reroll}
        toggleTable={setShowTable}
        showTable={showTable}
      />
      {showTable && (
        <Table
          adjectives={adjectives}
          adj={adj}
          descriptors={descriptors}
          desc={desc}
          quirks={quirks}
          quirk={quirk}
        />
      )}
    </div>
  );
}

export default App;

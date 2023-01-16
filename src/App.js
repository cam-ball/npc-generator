import './App.css';
import data from './constants.json';
import Table from './components/table';

const roll = () => {
  return Math.floor(Math.random() * 20);
}

const Sentence = ({adjective, descriptor, quirk}) => {
  return (
    <h2>
      A <span className="keyword">{adjective}</span> <span className="keyword">{descriptor}</span> who <span className="keyword">{quirk}</span>.
    </h2>
  )
}

function App() {
  const {adjectives, descriptors, quirks} = data;
  const adj = roll();
  const desc = roll();
  const quirk = roll();

  return (
    <div className="App">
      <Sentence 
        adjective={adjectives[adj]} 
        descriptor={descriptors[desc]} 
        quirk={quirks[quirk]} 
      />
      <Table 
        adjectives={adjectives} 
        descriptors={descriptors} 
        quirks={quirks}
      />
    </div>
  );
}

export default App;

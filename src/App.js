import './App.css';
import data from './constants.json';

function App() {
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Roll</th>
            <th>Adjective</th>
            <th>Primary Descriptor</th>
            <th>Quirk</th>
          </tr>
        </thead>
      <tbody>
        <TableData />
      </tbody>
      </table>
    </div>
  );
}

const TableData = () => {
  const tableRows = [];
  for (let i = 0; i < 20; i++) {
    tableRows.push(
      <tr key={i+1}>
        <td>{i+1}</td>
        <td>{data.adjectives[i]}</td>
        <td>{data.descriptors[i]}</td>
        <td>{data.quirks[i]}</td>
      </tr>
    )
  }
  return tableRows
}

export default App;

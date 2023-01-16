import data from '../constants.json';

const Table = () => {
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

  return(
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
        {tableRows}
      </tbody>
    </table>
  );
}

export default Table;

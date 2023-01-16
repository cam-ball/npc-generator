const Table = ({adjectives, descriptors, quirks}) => {
  const tableRows = [];
  for (let i = 0; i < 20; i++) {
    tableRows.push(
      <tr key={i+1}>
        <td>{i+1}</td>
        <td>{adjectives[i]}</td>
        <td>{descriptors[i]}</td>
        <td>{quirks[i]}</td>
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

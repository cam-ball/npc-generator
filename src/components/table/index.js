import "./table.css";

const Table = ({ adjectives, adj, descriptors, desc, quirks, quirk }) => {
  const cellClass = (attr, index) => {
    return attr === index ? "highlight" : null;
  };
  const tableRows = [];
  for (let i = 0; i < 20; i++) {
    tableRows.push(
      <tr key={i + 1}>
        <td>{i + 1}</td>
        <td className={cellClass(adj, i)}>{adjectives[i]}</td>
        <td className={cellClass(desc, i)}>{descriptors[i]}</td>
        <td className={cellClass(quirk, i)}>{quirks[i]}</td>
      </tr>
    );
  }

  return (
    <div className="rolltable">
      <table>
        <thead>
          <tr>
            <th>Roll</th>
            <th>Adjective</th>
            <th>Primary Descriptor</th>
            <th>Quirk</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
};

export default Table;

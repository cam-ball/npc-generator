import "./generator.css";

const Sentence = ({ adjective, descriptor, quirk }) => {
  return (
    <h2>
      A <span className="keyword">{adjective}</span>{" "}
      <span className="keyword">{descriptor}</span> who{" "}
      <span className="keyword">{quirk}</span>.
    </h2>
  );
};

const Generator = ({
  adjectives,
  adj,
  descriptors,
  desc,
  quirks,
  quirk,
  handleReroll,
  toggleTable,
  showTable,
}) => {
  const buttonText = showTable ? "table begone" : "show me the table";

  return (
    <div className="generator">
      <span className="leader">What about a...</span>
      <Sentence
        adjective={adjectives[adj]}
        descriptor={descriptors[desc]}
        quirk={quirks[quirk]}
      />
      <div className="buttons">
        <button onClick={() => handleReroll()}>hit me again</button>
        <button onClick={() => toggleTable(!showTable)}>{buttonText}</button>
      </div>
    </div>
  );
};

export default Generator;

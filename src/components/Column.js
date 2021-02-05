import ColumnBody from "./ColumnBody";

function Column(props) {
  return (
    <div className = "Column">
      <h2>{props.title}</h2>
      <ColumnBody />
    </div>
  );
}

export default Column;

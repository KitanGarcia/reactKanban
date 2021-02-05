import ColumnBody from "./ColumnBody";

function Column(props) {
  return (
    <div className = "Column">
      <h2>{props.title}</h2>
      <ColumnBody title = {props.title}/>
    </div>
  );
}

export default Column;

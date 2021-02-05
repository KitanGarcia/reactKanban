import Column from "./Column";

function Board(props) {
  return (
    <div className = "Board">
      <Column title = {"Pending Task"}/>
      <Column title = {"In Progress"}/>
      <Column title = {"Completed"}/>
    </div>
  );
}

export default Board;

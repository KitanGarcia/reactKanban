import Column from "./Column";
import CardModal from "./CardModal";

function Board(props) {
  return (
    <div className = "Board" id = "modalLocation">
      <Column title = {"Pending Task"}/>
      <Column title = {"In Progress"}/>
      <Column title = {"Completed"}/>
      <CardModal />
    </div>
  );
}

export default Board;

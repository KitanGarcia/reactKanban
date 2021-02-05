import { useState } from "react";

import CardModal from "./CardModal";

function ColumnBody(props) {
  const [addCard, setAddCard] = useState(false);

  const clickPlus = e => {
    console.log("Clicked +");
    console.log(props.title);
    setAddCard(!addCard);
  }

  return (
    <div className = "ColumnBody">
      <button onClick = {clickPlus}>
        +
      </button>
    {addCard ? <CardModal /> : ""}
    </div>
  );
}

export default ColumnBody;

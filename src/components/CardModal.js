import { useEffect, useState } from "react";
import ReactDOM from "react-dom";


function CardModal(props) {

//  const [showModal, setShowModal] = useState(props.clickedPlus);
  const [showModal, setShowModal] = useState(props.clickedPlus);

  //similar to componentDidMount, but for function components
  useEffect(() => {
    const modalLocation = document.getElementById("modalLocation");
    setShowModal(props.clickedPlus);
  });

  const closeModal = e => {
    e.stopPropagation();
    setShowModal(false);
    console.log(showModal);
    console.log("CLOSE");
  }


  const modal = (
    <div className = "addCard">
      <input placeholder = "Description"></input>
      <input placeholder = "Assignee"></input>
      <button onClick = {closeModal}>
        Add Task
      </button>
    </div>
  );


  return (
    <div>{showModal ? modal: null}</div>
  );
}

/*
function CardModal(props) {
  const modalLocation = document.getElementById("modalLocation");

  return (
    ReactDOM.createPortal(
      <div className = "addCard">
        <input placeholder = "Description"></input>
        <input placeholder = "Assignee"></input>
      </div>,
      modalLocation
    )
  );
}
*/

export default CardModal;

const addNoteButton = document.querySelector(".add_note_button")
const noteForm = document.querySelector(".modal")
const closeButton = document.querySelector(".modal__close-button")

// function handleEsc(){
//     if (e.key === "Escape") {
//         noteForm.classList.remove("modal_opened")
//     }
// }



function close() {
    document.removeEventListener("keydown", handleEsc);
    noteForm.classList.remove("modal_opened");
}
  
function handleEsc(e) {
    if (e.key === "Escape") {
      close();
    }
}

function open() {
    noteForm.classList.add("modal_opened");
    document.addEventListener("keydown", handleEsc);
}
  
addNoteButton.addEventListener("click", open); 
closeButton.addEventListener("click", close);


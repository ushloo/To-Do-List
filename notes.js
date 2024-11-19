const addNoteButton = document.querySelector(".add_note_button")
const noteForm = document.querySelector(".modal")
const closeButton = document.querySelector(".modal__close-button")

addNoteButton.addEventListener('click', () => {
    noteForm.classList.add("modal_opened")
})

closeButton.addEventListener('click', () => {
    noteForm.classList.remove("modal_opened")
})
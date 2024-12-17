document.addEventListener("DOMContentLoaded", () => {
    const addNoteBtn = document.getElementById("add-note");
    const notesContainer = document.getElementById("notes-container");
    const placeholderText = document.getElementById("placeholder-text");

    // Function to create a new note form
    function createNoteForm() {
        // Remove placeholder text on the first note creation
        if (placeholderText) {
            placeholderText.style.display = "none";
        }

        const noteForm = document.createElement("div");
        noteForm.classList.add("note-form");
        
        noteForm.innerHTML = `
            <h3 contenteditable="true">Title of Note</h3>
            <div class="task-input-container">
                <input type="text" class="task-input" placeholder="Add a new task" />
                <button class="add-task-btn">Add</button>
            </div>
            <button class="delete-note-btn" title="Delete Note">🗑️</button>
        `;

        // Add functionality to delete the note
        const deleteBtn = noteForm.querySelector(".delete-note-btn");
        deleteBtn.addEventListener("click", () => {
            noteForm.remove();
            showToast("Note Deleted");

            // Show placeholder text if no more notes exist
            if (notesContainer.children.length === 0 && placeholderText) {
                placeholderText.style.display = "block";
            }
        });

        // Add task button functionality
        const addTaskBtn = noteForm.querySelector(".add-task-btn");
        const taskInput = noteForm.querySelector(".task-input");

        addTaskBtn.addEventListener("click", () => {
            const taskValue = taskInput.value.trim();
            if (taskValue) {
                const task = document.createElement("p");
                task.textContent = `• ${taskValue}`;
                noteForm.appendChild(task);
                taskInput.value = "";
                showToast("Task added");
            }
        });

        // Append the new note form to the container
        notesContainer.appendChild(noteForm);
        showToast("Note Created");
    }

    // Function to display a toast notification
    function showToast(message) {
        const toast = document.createElement("div");
        toast.classList.add("toast");
        toast.innerHTML = `<strong>${message}</strong>`;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 3000);
    }

    // Add event listener for the "+" button
    addNoteBtn.addEventListener("click", createNoteForm);
});
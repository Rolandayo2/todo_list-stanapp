// Get references to the input field and the task list
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Function to add a new task to the list
function addTask() {
    const taskText = taskInput.value.trim(); // Remove leading/trailing spaces

    if (taskText !== "") {
        // Create a new list item and add the task text
        const listItem = document.createElement("li");
        listItem.textContent = taskText;

        // Create buttons for deleting and marking as completed
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => {
            listItem.remove();
        });

        const completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.addEventListener("click", () => {
            listItem.classList.toggle("completed");
        });

        // Append buttons to the list item
        listItem.appendChild(deleteButton);
        listItem.appendChild(completeButton);

        // Append the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }
}

// Function to add a task when 'Enter' key is pressed
function handleKeyPress(event) {
    if (event.key === "Enter") {
        addTask();
    }
}

// Add event listeners
taskInput.addEventListener("keypress", handleKeyPress);
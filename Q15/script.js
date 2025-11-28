// Get references to DOM elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Event listener for the "Add Task" button
addTaskButton.addEventListener('click', addTask);

// Allows adding a task by pressing Enter in the input field
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});

/**
 * Handles the addition of a new task to the list.
 */
function addTask() {
    // Retrieve the text and handle edge case (empty input)
    const taskText = taskInput.value.trim();
    
    // 3. Robustness check: Ensure the input field is not empty
    if (taskText === "") {
        alert("Please enter a task before adding.");
        return;
    }

    // 1. Dynamically create a new <li> element
    const listItem = document.createElement('li');
    listItem.className = 'task-item';

    // Create a <span> to hold the task text (for styling completion)
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Create the "Complete" button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.className = 'complete-btn';

    // Create the "Delete" button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'delete-btn';

    // Assemble the <li>: [Task Text] [Complete Button] [Delete Button]
    listItem.appendChild(taskSpan);
    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    // Append the new <li> to the <ul>
    taskList.appendChild(listItem);

    // Clear the input field for the next task
    taskInput.value = '';
}

// 2. Event Delegation: Handle "Delete" and "Complete" actions on the entire list
// This is more efficient than adding a listener to every single task button.
taskList.addEventListener('click', function(event) {
    const target = event.target;
    
    // Handle Delete Button Click
    if (target.classList.contains('delete-btn')) {
        // Find the parent <li> element (the entire task) and remove it
        // target.parentElement is the <li>
        target.parentElement.remove(); // The modern way to remove an element
    } 
    
    // Handle Complete Button Click
    else if (target.classList.contains('complete-btn')) {
        // Find the <span> element which holds the text (which is the first child of <li>)
        const taskItemText = target.parentElement.querySelector('span');
        
        // Toggle the 'completed' class for striking through the text
        taskItemText.classList.toggle('completed');
    }
});
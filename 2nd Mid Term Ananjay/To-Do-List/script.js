let tasks = [];

const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");

// Add Task
function addTask() {
    let text = taskInput.value.trim();

    if (text === "") {
        return;
    }

    let task = {
        text: text,
        done: false
    };

    tasks.push(task);

    taskInput.value = "";

    displayTasks();
}

// Display Tasks
function displayTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        let li = document.createElement("li");

        let span = document.createElement("span");
        span.textContent = task.text;
        span.className = "task-text";

        if (task.done) {
            span.classList.add("completed");
        }

        // Toggle Completed
        span.addEventListener("click", function() {
            tasks[index].done = !tasks[index].done;
            displayTasks();
        });

        // Delete Button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", function() {
            tasks.splice(index, 1);
            displayTasks();
        });

        li.appendChild(span);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });

    // Count Remaining Tasks
    let remaining = tasks.filter(task => !task.done).length;

    if (tasks.length === 0) {
        taskCount.textContent = "No tasks yet. Add one above!";
    } else {
        taskCount.textContent =
            remaining + " of " + tasks.length + " tasks remaining";
    }
}

// Add Button Click
addBtn.addEventListener("click", addTask);

// Enter Key Event
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});
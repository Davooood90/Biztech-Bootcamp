// WRITE YOUR SCRIPT HERE
document.getElementById("taskForm").addEventListener("submit", handTaskSubmission);

function handTaskSubmission(event) {
    event.preventDefault();

    let task = document.getElementById("taskInput").value;

    if (task.length > 50 || task.length < 3) {
        alert("Task desciption must be between 3 - 50 characters!")
    } else {
        console.log("The task included is:", task);
        document.getElementById("taskInput").value = '';

        addTask(task);

    }
}

function addTask(task) {
    let newElement = document.createElement("li");
    let count = document.getElementById("taskList").getElementsByTagName("li").length + 1
    newElement.textContent = "Task " + count + ": " + task;

    let listfound = document.getElementById("taskList");
    listfound.appendChild(newElement);
}


window.addEventListener("DOMContentLoaded", fetchTasks);

function fetchTasks() {
    fetch("http://localhost:3000/tasks")
        .then((response) => response.json())
        .then((tasks) => {
            const taskList = document.getElementById("taskList");
            taskList.innerHTML = "";

            for (let i = 0; i < tasks.length; i++) {
                const newTask = document.createElement("li");
                newTask.textContent = tasks[i].task;
                taskList.appendChild(newTask);
            }
        })
        .catch((error) => {
            console.log("Error fetching tasks:", error)
        });
}
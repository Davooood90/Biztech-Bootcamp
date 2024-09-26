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
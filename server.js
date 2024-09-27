const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

let tasks = [
    { id: 1, task: "Do homework" }, 
    { id: 2, task: "Do more homework" }, 
    { id: 3, task: "Do even more homework" }
]

app.get("/tasks", (request, response) => {
    response.json(tasks)
})

app.listen(port, () => {
    console.log("Server is running!")
})





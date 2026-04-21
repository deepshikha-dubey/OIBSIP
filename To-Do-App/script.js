// let tasks = [];
// function addTask(){
//     const input = document.getElementById("taskInput");
//     const text = input.value.trim();
    
//     if (text == "") return;

//     const task = {
//         id: Date.now(),
//         text: text,
//         completed: false,
//         createdAt: new Date(),
//         completedAt: null
//     };

//     tasks.push(task);
//     input.value = "";
//     renderTasks();
// }

// function toggleComplete(id){
//     tasks = tasks.map(task => {
//         if (tasks.id === id){
//             task.completed = !task.completed;
//             task.completedAt = task.completed ? new Date() : null;
//         }
//         return task;
//     });
//     renderTasks();
// }

// function deleteTask(id){
//     tasks = tasks.filter(task => task.id !== id);
//     renderTasks();
// }
// function editTask(id){
//     const newText = prompt("Edit your task:");
//     if(!newTask) return;

//     tasks = tasks.map(task => {
//         if(task.id === id){
//             task.text = newText;
//         }
//         return task;
//     });
//     renderTasks();
// }

// function renderTasks(){
//     const pendingList = document.getElementById("pendingList");
//     const completedList = document.getElementById("completedList");

//     pendingList.innerHTML = "";
//     completedList.innerHTML = "";

//     tasks.forEach(task => {
//         const li = document.createElement("li");

//         const taskText = document.createElement("span");
        
//         taskText.innerText = `${task.text} (Added: ${task.createdAt.toLocaleString()})`;
       
//         if (task.completed){
//             taskText.classList.add("completed");
//         }

//         const actions = document.createElement("div");
//         actions.className = "actions";

//         const completeBtn = document.createElement("button");
//         completeBtn.innerText = task.completed ? "Undo" : "Complete";
//         completeBtn.onclick = () => toggleComplete(task.id);

//         const editBtn = document.createElement("button");
//         editBtn.innerText = "Edit";
//         editBtn.onclick = () => editTask(task.id);

//         const deleteBtn = document.createElement("button");
//         deleteBtn.innerText = "Delete";
//         deleteBtn.onclick = () => deleteTask(task.id);

//         actions. appendChild(completeBtn);
//         actions.appendChild(editBtn);
//         actions.appendChild(deleteBtn);

//         li.appendChild(taskText);
//         li.appendChild(actions);

//         if(task.completed){
//             completedList.appendChild(li);
//         }else{
//             pendingList.appendChild(li);
//         }
//     });
// }

console.log("JS connected");
    let tasks = [];

    function addTask() {
      const input = document.getElementById("taskInput");
      const text = input.value.trim();

      if (text === "") return;

      const task = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date(),
        completedAt: null
      };

      tasks.push(task);
      input.value = "";
      renderTasks();
    }

    function toggleComplete(id) {
      tasks = tasks.map(task => {
        if (task.id === id) {
          task.completed = !task.completed;
          task.completedAt = task.completed ? new Date() : null;
        }
        return task;
      });

      renderTasks();
    }

    function deleteTask(id) {
      tasks = tasks.filter(task => task.id !== id);
      renderTasks();
    }

    function editTask(id) {
      const newText = prompt("Edit your task:");
      if (!newText) return;

      tasks = tasks.map(task => {
        if (task.id === id) {
          task.text = newText;
        }
        return task;
      });

      renderTasks();
    }

    function renderTasks() {
      const pendingList = document.getElementById("pendingList");
      const completedList = document.getElementById("completedList");

      pendingList.innerHTML = "";
      completedList.innerHTML = "";

      tasks.forEach(task => {
        const li = document.createElement("li");

        const taskText = document.createElement("span");
        taskText.innerText = `${task.text} (Added: ${task.createdAt.toLocaleString()})`;

        if (task.completed) {
          taskText.classList.add("completed");
        }

        const actions = document.createElement("div");
        actions.className = "actions";

        const completeBtn = document.createElement("button");
        completeBtn.innerText = task.completed ? "Undo" : "Complete";
        completeBtn.onclick = () => toggleComplete(task.id);

        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.onclick = () => editTask(task.id);

        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = () => deleteTask(task.id);

        actions.appendChild(completeBtn);
        actions.appendChild(editBtn);
        actions.appendChild(deleteBtn);

        li.appendChild(taskText);
        li.appendChild(actions);

        if (task.completed) {
          completedList.appendChild(li);
        } else {
          pendingList.appendChild(li);
        }
      });
    }
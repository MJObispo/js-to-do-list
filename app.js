"use strict";

window.addEventListener("load", ()=>{
    const addBtn = document.querySelector("#addBtn");

    addBtn.addEventListener("click", () => {
        const taskName = document.querySelector("#new-task-input").value;

        if (!taskName) {
            alert("No task input...");
        } else {
            const newTaskContainer = document.createElement("div");
            newTaskContainer.classList.add("task");

            let newTaskName = document.createElement("h1");
            newTaskName.classList.add("task-name");
            newTaskName.textContent = taskName;

            const newTaskButtonDiv = document.createElement("div");
            newTaskButtonDiv.classList.add("action-buttons");

            const newTaskEditButton = document.createElement("button");
            newTaskEditButton.type = "button";
            newTaskEditButton.className = "editBtn";
            newTaskEditButton.innerText = "Edit task";

            const newTaskDeleteButton = document.createElement("button");
            newTaskDeleteButton.innerText = "Delete";
            newTaskDeleteButton.type = "button";

            newTaskButtonDiv.appendChild(newTaskEditButton);
            newTaskButtonDiv.appendChild(newTaskDeleteButton);
          
            newTaskContainer.appendChild(newTaskName);
            newTaskContainer.appendChild(newTaskButtonDiv);

            taskList.appendChild(newTaskContainer);

            newTaskEditButton.addEventListener("click", ()=> {
                newTaskName.textContent = prompt("Enter new task: ");
                taskList.removeChild(newTaskContainer);
                newTaskContainer.appendChild(newTaskName);
                newTaskContainer.appendChild(newTaskButtonDiv);
                taskList.appendChild(newTaskContainer);
            });

            newTaskDeleteButton.addEventListener("click", () => {
                taskList.removeChild(newTaskContainer);
            });
        }
    });
});
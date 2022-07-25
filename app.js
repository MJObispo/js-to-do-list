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

            let newImgEditButton = document.createElement("img");
            newImgEditButton.src = "assets/pencil.png";
            newImgEditButton.height = "40";
            newImgEditButton.width = "40";
            newTaskEditButton.appendChild(newImgEditButton);
    
            const newTaskDeleteButton = document.createElement("button");
            newTaskDeleteButton.type = "button";

            let newImgTrashButton = document.createElement("img");
            newImgTrashButton.src = "assets/trash.png";
            newImgTrashButton.height = "40";
            newImgTrashButton.width = "40";
            newTaskDeleteButton.appendChild(newImgTrashButton);
            
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
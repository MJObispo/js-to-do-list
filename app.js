"use strict";

window.addEventListener("load", ()=>{
    const addBtn = document.querySelector("#addBtn");

    addBtn.addEventListener("click", () => {
        const taskName = document.querySelector("#new-task-input").value;

        if (!taskName) {
            alert("No task input...");
        }
    });
});
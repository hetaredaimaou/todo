function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");
  
  if (taskInput.value !== "") {
    const li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = "";
    
    // タスクをクリックしたら完了状態にする
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
  }
}

window.addEventListener('load', () => {
  document.getElementById('add-btn').addEventListener('click', addTask)
})
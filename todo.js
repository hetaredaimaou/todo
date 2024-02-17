function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");

  if (taskInput.value !== "") {
    var li = document.createElement("li");
    li.textContent = taskInput.value;
    taskList.appendChild(li);
    taskInput.value = "";

    // タスクをクリックしたら完了状態にする
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
  }
}

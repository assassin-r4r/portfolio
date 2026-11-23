document.getElementById("addTaskBtn").onclick = function () {
    const taskText = document.getElementById("taskInput").value.trim();
    const taskDateRaw = document.getElementById("taskDate").value;

    if (!taskText) {
        alert("Пожалуйста, введите задачу!");
        return;
    }

    // Форматирование даты в российский формат
    const options = { year: "numeric", month: "long", day: "numeric" };
    const taskDate = new Date(taskDateRaw).toLocaleDateString("ru-RU", options);

    const taskItem = document.createElement("li");
    // текст задачи и даты
    taskItem.innerHTML = `<span>${taskText} - ${taskDate}</span>`;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Удалить";
    deleteButton.className = "delete-btn";
    taskItem.appendChild(deleteButton);

    // кнопка "Выполнено"
    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Выполнено";
    doneBtn.className = "done-btn";

    

    // добавляем кнопку к эелементу списка
    taskItem.appendChild(doneBtn);

    // добавляем весь элемент в список на странице
    document.getElementById("taskList").appendChild(taskItem);

    // Очистка полей
    document.getElementById("taskInput").value = "";


    
    

};




// Делегирование событий для кнопок "Выполнено"
document.getElementById("taskList").addEventListener("click", function(event) {
    if (event.target.classList.contains("done-btn")) {
        // Находим ближайший базовый эелемент <li> и его текстовый узел (первый дочерний элемент)
        const taskItem = event.target.closest("li");
        const taskTextSpan = taskItem.querySelector("span");

        // Переключаем класс для оформления выполненной задачи 
        taskTextSpan.classList.toggle("task-done");
    }

    if (event.target.classList.contains("delete-btn")) {
        const taskItem = event.target.closest("li");
        taskItem.remove();
    }
});



const tasksList = document.querySelector ('.tasks__list');
const form = document.querySelector ('form');
const input = document.getElementById ('task__input');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (input.value) {
        tasksList.insertAdjacentHTML('afterBegin', '<div class="task"> <div class="task__title"></div><a href="#" class="task__remove">&times;</a></div>' );
        const taskTitle = document.querySelector('.task__title');
        taskTitle.textContent = input.value;
        form.reset();
    }
    const remove = Array.from(document.querySelectorAll('.task__remove'));
    const task = Array.from(document.querySelectorAll('.task'));

    remove.forEach((event, index) => {
        event.addEventListener('click', (event) => {
          event.preventDefault();
          task[index].remove();
        })
    })
})
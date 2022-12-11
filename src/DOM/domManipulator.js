import { getList} from "../Logic/user";
export function createElement(eType, id, textContent, className = false) 
{
    const element = document.createElement(eType);
    element.textContent = textContent;
    element.id = id;
    if(className)
        element.classList.add(className);
    return element;
};
export function tabSwitch(name)
{
    const content = document.getElementById('content');
    while (content.firstChild) {
        content.removeChild(content.firstChild);
    }
    import(
    /*webpackChunkName: "[request]"*/ 
    /* webpackInclude: /\.js$/*/
    `./${name}/${name}`).then(({ default: loadTab})=>{loadTab()});
}
export function createTask(task)
{
    const taskDiv = createElement('div', '', '', 'task');
    taskContainer.appendChild(taskDiv);
    const name = createElement('div', '', task.name);
    taskDiv.appendChild(name);
    const date = createElement('div', '', task.date);
    taskDiv.appendChild(date);
    const prio = createElement('div', '', task.prio);
    taskDiv.appendChild(prio);
    const check = createElement('input', '', '', 'check');
    check.type = 'checkBox';
    check.checked = task.isComplete;
    taskDiv.appendChild(check);
    return taskDiv;
}
export function createAddForm(listName)
{
    const addTask = createElement('form', 'add-task', '');

    const taskName = createElement('input', 'task-name', '');
    addTask.appendChild(taskName);
    const taskDesc = createElement('input', 'task-desc', '');
    addTask.appendChild(taskDesc);
    const taskDate = createElement('input', 'task-date', '');
    taskDate.type = 'date';
    addTask.appendChild(taskDate);

    const taskPrioDiv = createElement('form', 'task-prio-div', '');
    addTask.appendChild(taskPrioDiv);

    const taskPrioLow = createElement('input', 'task-prio-low', '');
    taskPrioLow.type = 'radio';
    taskPrioLow.value = 'low';
    taskPrioLow.name = 'prio';
    taskPrioDiv.appendChild(taskPrioLow);
    const lowLabel = createElement('label', '', 'Low');
    lowLabel.for = 'task-prio-low';
    taskPrioDiv.appendChild(lowLabel);

    const taskPrioMed = createElement('input', 'task-prio-med', '');
    taskPrioMed.type = 'radio';
    taskPrioMed.value = 'med';
    taskPrioMed.name = 'prio';
    taskPrioDiv.appendChild(taskPrioMed);
    const medLabel = createElement('label', '', 'Medium');
    medLabel.for = 'task-prio-med';
    taskPrioDiv.appendChild(medLabel);

    const taskPrioHigh = createElement('input', 'task-prio-high', '');
    taskPrioHigh.type = 'radio';
    taskPrioHigh.value = 'high';
    taskPrioHigh.name = 'prio';
    taskPrioDiv.appendChild(taskPrioHigh);
    const highLabel = createElement('label', '', 'High');
    highLabel.for = 'task-prio-high';
    taskPrioDiv.appendChild(highLabel);

    const submit = createElement('button', 'task-submit', '+');
    submit.type = 'button';
    addTask.appendChild(submit);

    submit.addEventListener('click', () =>
    {
        const list = getList(listName);
        if(list)
        {
            let prio = taskPrioHigh.Checked ? taskPrioHigh.value : taskPrioMed.Checked ? taskPrioMed.value : taskPrioLow.value;
            let task = list.addTask(taskName.value, taskDesc.value, taskDate.value, prio); 
            if(task)
                createTask(task);
        }
    })
    return addTask;
}


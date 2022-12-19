import { createElement,expandWithAni,retractAnimation, removeAfterAni, createTask } from '../domManipulator';
import './add.css';
import {addTask, getAllLists } from '../../Logic/user';

export default () =>
{
    const addButton = createElement('button', 'add', '+');
    document.body.appendChild(addButton);

    // Create screen cover for rest of main screen when menu is open
    const screenCover = createElement('div', 'screen-cover', '');

    const addTaskDiv = createElement('form', 'add-div', '');

    const addTitle = createElement('div', 'add-title', 'Add a task: ')
    addTaskDiv.appendChild(addTitle);

    const selectContainer = createElement('div', 'select-container', '');
    addTaskDiv.appendChild(selectContainer);
    const selectList = document.createElement('select');
    selectContainer.appendChild(selectList);
    const firstOp = createElement('option', '', 'Select list: ', 'option');
    firstOp.value = '0';
    selectList.appendChild(firstOp);
    const allLists = getAllLists();
    allLists.forEach((list, index) => 
    {
        const op = createElement('option', '', list, 'option');
        op.value = '' + index;
        selectList.appendChild(op);
    });

    const taskName = createElement('input', 'task-name', '');
    addTaskDiv.appendChild(taskName);
    const taskDesc = createElement('input', 'task-desc', '');
    addTaskDiv.appendChild(taskDesc);
    const taskDate = createElement('input', 'task-date', '');
    taskDate.type = 'date';
    taskDate.value = '2022-12-11';
    addTaskDiv.appendChild(taskDate);

    const taskPrioDiv = createElement('form', 'task-prio-div', '');
    addTaskDiv.appendChild(taskPrioDiv);

    const taskPrioLow = createElement('input', 'task-prio-low', '');
    taskPrioLow.type = 'radio';
    taskPrioLow.value = 'low';
    taskPrioLow.name = 'prio';
    taskPrioLow.checked = true;
    taskPrioDiv.appendChild(taskPrioLow);
    const lowLabel = createElement('label', '', 'Low');
    lowLabel.for = 'task-prio-low';
    taskPrioDiv.appendChild(lowLabel);

    const taskPrioMed = createElement('input', 'task-prio-med', '');
    taskPrioMed.type = 'radio';
    taskPrioMed.value = 'med';
    taskPrioMed.name = 'prio';
    taskPrioMed.checked = false;
    taskPrioDiv.appendChild(taskPrioMed);
    const medLabel = createElement('label', '', 'Medium');
    medLabel.for = 'task-prio-med';
    taskPrioDiv.appendChild(medLabel);

    const taskPrioHigh = createElement('input', 'task-prio-high', '');
    taskPrioHigh.type = 'radio';
    taskPrioHigh.value = 'high';
    taskPrioHigh.name = 'prio';
    taskPrioHigh.checked = false;
    taskPrioDiv.appendChild(taskPrioHigh);
    const highLabel = createElement('label', '', 'High');
    highLabel.for = 'task-prio-high';
    taskPrioDiv.appendChild(highLabel);

    const submit = createElement('button', 'task-submit', '+');
    submit.type = 'button';
    addTaskDiv.appendChild(submit);

    submit.addEventListener('click', () =>
    {
        let prio = taskPrioHigh.checked ? taskPrioHigh.value : taskPrioMed.checked ? taskPrioMed.value : taskPrioLow.value;
        let task = addTask(allLists[selectList.value], taskName.value, taskDesc.value, taskDate.value, prio);
        if(task)
        {
            const listContainer = document.getElementById('list');
            listContainer.prepend(createTask(task));
        }

        screenCover.click();
    });
    //------------------------------ANIMATION------------------------------------------//
    addButton.addEventListener('click', ()=>
    {
        expandWithAni(document.body, addTaskDiv, 'popIn');
        expandWithAni(document.body, screenCover, 'opIn');
    });
    screenCover.addEventListener('click', (e) => 
    {
        retractAnimation(addTaskDiv, 'popOut');
        retractAnimation(e.target, 'opOut');
    });

    addTaskDiv.addEventListener('animationend', (e) =>
    {
        if(e.animationName === 'popOut')
        {
            removeAfterAni(document.body, e.target, 'popOut');
            removeAfterAni(document.body, screenCover, 'opOut');
        }
    });
}
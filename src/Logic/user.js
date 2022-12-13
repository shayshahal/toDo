import listFactory from './list';
import taskFactory from './task';

export function loadDay()
{
    let day = listFactory('My Day');
    let all = JSON.parse(localStorage.getItem('All Tasks'));
    console.log(all);
    if(all)
        all.tasks.forEach(task => {if(task.date === '2022-12-11') {addTask(day, task.name, task.desc, task.date, task.prio)}});
    else
        localStorage.setItem('All Tasks', JSON.stringify(listFactory('All Tasks')));
    localStorage.setItem('My Day', JSON.stringify(day));
}
export function getList(name)
{
    if(typeof(localStorage) === 'undefined')
        return listFactory('empty');
    return JSON.parse(localStorage.getItem(name));
}

export function addList(name)
{
    if(typeof(localStorage) === 'undefined' || JSON.parse(localStorage.getItem(name)))
        return;
    
    localStorage.setItem(name, JSON.stringify(listFactory(name)));
}

export function removeList(name)
{
    if(typeof(localStorage) === 'undefined' || !JSON.parse(localStorage.getItem(name)))
        return;
    
    localStorage.removeItem(name);
}
export function addTask(listName, taskName, taskDesc, taskDate, taskPrio)
{
    let list = getList(listName);
    if(!list || list.tasks.includes(taskName))
        return false;
    let task = taskFactory(taskName, taskDesc, taskDate, taskPrio);
    list.tasks.shift(task);
    let all = getList('All Tasks');
    if(!all || all.tasks.includes(taskName))
        return task;
    getList('All Tasks').tasks.shift(task);
    return task;
}
export function removeTask(listName, taskName)
{
    if(getList(listName).tasks.includes(taskName))
        return false;
    getList(listName).tasks.filter(task => task.name !== taskName)
    return true;
    
}
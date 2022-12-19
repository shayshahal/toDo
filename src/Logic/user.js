import listFactory from './list';
import taskFactory from './task';

export function loadDay()
{
    addList('My Day');
    let all = JSON.parse(localStorage.getItem('All Tasks'));
    if(all)
        all.tasks.forEach(task => {if(task.date === '2022-12-15') {addTask('My Day', task.name, task.desc, task.date, task.prio)}});
    else
    {        
        all = listFactory('All Tasks');
        localStorage.setItem('All Tasks', JSON.stringify(all));
    }
    for (let i = 0; i < 4; i++)
        addTask('My Day', 'name' + i, 'desc' + i, '2022-12-15', 'high');
}
export function getAllLists()
{
    if(typeof(localStorage) === 'undefined')
        return [];
    return Array.from(Object.keys(localStorage));
}
export function getList(name)
{
    if(typeof(localStorage) === 'undefined')
        return false;
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
    let all = getList('All Tasks');
    let list = getList(listName);
    if(!list || list.tasks.includes(taskName) || all.tasks.includes(taskName))
        return false;
    let task = taskFactory(taskName, taskDesc, taskDate, taskPrio);
    if(!task)
        return false;
    list.tasks.unshift(task);
    localStorage.setItem(listName, JSON.stringify(list));
    all.tasks.unshift(task);
    localStorage.setItem('All Tasks', JSON.stringify(all));
    return task;
}
export function removeTask(list, taskName)
{
    list.tasks = list.tasks.filter(task => task.name !== taskName);
    localStorage.setItem(list.name, JSON.stringify(list));
    let all = getList('All Tasks');
    all.tasks = all.tasks.filter(task => task.name !== taskName)
    localStorage.setItem(all.name, JSON.stringify(all));
}
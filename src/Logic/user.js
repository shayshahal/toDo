import listFactory from './list';
import taskFactory from './task';

export function loadDay()
{
    let day = listFactory('My Day');
    let all = JSON.parse(localStorage.getItem('All Tasks'));
    if(all)
        all.tasks.forEach(task => {if(task.date === '2022-12-13') {addTask(day, task.name, task.desc, task.date, task.prio)}});
    else
    {        
        all = listFactory('All Tasks');
        localStorage.setItem('All Tasks', JSON.stringify(all));
    }
    for (let i = 0; i < 4; i++)
        addTask(day, 'name' + i, 'desc' + i, '2022-12-13', 'high');
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
export function addTask(list, taskName, taskDesc, taskDate, taskPrio)
{
    let all = getList('All Tasks');
    if(!list || list.tasks.includes(taskName) || all.tasks.includes(taskName))
        return false;
    let task = taskFactory(taskName, taskDesc, taskDate, taskPrio);
    list.tasks.unshift(task);
    all.tasks.unshift(task);
    return task;
}
export function removeTask(list, taskName)
{
    if(list.tasks.includes(taskName))
        return false;
    list.tasks.filter(task => task.name !== taskName)
    return true;
}
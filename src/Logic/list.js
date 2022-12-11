import taskFactory from './task';

export default (name) => 
{
    const tasks = new Map();
    const addTask = (taskName, taskDesc, taskDate, taskPrio) => 
    {
        if(tasks.has(taskName)) 
            return null;
        let task = taskFactory(taskName, taskDesc, taskDate, taskPrio);
        tasks.set(taskName, task);
        if(!localStorage.getItem('all'))
        { 
            localStorage.setItem('all', JSON.stringify(new Map()));
            if(!JSON.parse(localStorage.getItem('all')).has(taskName))
                JSON.parse(localStorage.getItem('all')).set(taskName, task);
        }
        return task;
    }
    const removeTask = (taskName) => {
        if(!tasks.has(taskName)) 
            return false;
        tasks.delete(taskName);
        if(JSON.parse(localStorage.getItem('all')))
            JSON.parse(localStorage.getItem('all')).delete(taskName);
    }
    return {name, tasks, addTask, removeTask};
}
import listFactory from './list';

export function loadUser()

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
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
export function createList(list)
{
    const listContainer = createElement('div', 'list', '');
    list.tasks.forEach(task => {listContainer.prepend(createTask(task))});
    return listContainer;
}
export function createTask(task)
{
    const taskDiv = createElement('div', '', '', 'task');
    const name = createElement('div', '', task.name);
    taskDiv.appendChild(name);
    const desc = createElement('div', '', task.desc);
    taskDiv.appendChild(desc);
    const date = createElement('div', '', task.date);
    taskDiv.appendChild(date);
    const prio = createElement('div', '', task.prio);
    prio.style.color = prio.textContent === 'high' ? 'red' : prio.textContent === 'medium' ? 'yellow' : 'green';
    taskDiv.appendChild(prio);
    const btnsDiv = createElement('div', '','', 'btnsDiv');
    const checkBtn = createElement('input', '', '', 'check');
    checkBtn.type = 'checkBox';
    checkBtn.checked = task.isComplete;
    btnsDiv.appendChild(checkBtn);
    const editBtn = createElement('button', '', '✎', 'edit');
    btnsDiv.appendChild(editBtn);
    taskDiv.appendChild(btnsDiv);

    
    return taskDiv;
}
export function expandWithAni(parent, element, ani)
{
    element.classList.toggle(ani);
    parent.appendChild(element);
}

export function retractAnimation(element, ani)
{
    var classList = element.classList;
    while (classList.length > 0) 
    {
        classList.remove(classList.item(0));
    }
    element.classList.add(ani);
}

export function removeAfterAni(parent, element, ani)
{
    element.classList.remove(ani);
    parent.removeChild(element);
}

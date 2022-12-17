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
    if(name === 'Home')
        import(`./Home/Home.js`).then(({ default: loadTab})=>{loadTab()});
    else
        import(`./ListTab/ListTab.js`).then(({ default: loadTab})=>{loadTab(name)});
}
export function createList(list)
{
    if(!list)
        return;
    const listContainer = createElement('div', 'list', '');
    list.tasks.forEach(task => {listContainer.prepend(createTask(task))});
    return listContainer;
}
export function createTask(task)
{
    const taskDiv = createElement('div', '', '', 'task');
    const name = createElement('input', '', '', 'editable');
    name.value = task.name;
    name.disabled = 'true';
    taskDiv.appendChild(name);
    const desc = createElement('input', '', '', 'editable');
    desc.value = task.desc;
    desc.disabled = 'true';
    taskDiv.appendChild(desc);
    const date = createElement('input', '','', 'editable');
    date.value = task.date;
    date.type = 'date';
    date.disabled = 'true';
    taskDiv.appendChild(date);
    const prio = createElement('input', '', task.prio, 'editable');
    prio.value = task.prio;
    prio.disabled = 'true';
    prio.style.color = prio.textContent === 'high' ? 'red' : prio.textContent === 'medium' ? 'yellow' : 'green';
    taskDiv.appendChild(prio);
    const btnsDiv = createElement('div', '','', 'btnsDiv');
    const checkBtn = createElement('input', 'check', '', 'check');
    checkBtn.type = 'checkBox';
    checkBtn.checked = task.isComplete;
    btnsDiv.appendChild(checkBtn);
    const editBtn = createElement('input', 'edit', '', 'check');
    editBtn.type = 'checkBox';
    editBtn.addEventListener('click', ()=>
    {
        name.disabled = !name.disabled;
        desc.disabled = !desc.disabled;
        date.disabled = !date.disabled;
        prio.disabled = !desc.disabled;
        taskDiv.classList.toggle('editing');
    })
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

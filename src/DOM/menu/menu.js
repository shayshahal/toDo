import './menu.css';
import {createElement} from '/src/DOM/domManipulator.js';

export default () =>
{
    // Create Menu expending button
    const expandMenuButton = createElement('button', 'expand-menu-btn', '☰');
    document.body.appendChild(expandMenuButton);

    //--------------------------Create left menu --------------------------------------//
    const leftMenu = createElement('div', 'left-menu','', '');

    // Horizontal div for menu button and name
    const topDivLeftMenu = createElement('div', 'top-div-left-menu','');
    leftMenu.appendChild(topDivLeftMenu);

    // Menu retract button
    const retractMenuButton = createElement('button', 'retract-menu-btn', '☰');
    topDivLeftMenu.appendChild(retractMenuButton);

    // Name of site
    const credit = createElement('div', 'name-menu', '©Shay Shahal');
    topDivLeftMenu.appendChild(credit);

    // Create screen cover for rest of main screen when menu is open
    const screenCover = createElement('div', 'screen-cover', '');

    // Create button to go to current day tasks
    const dailyBtn = createElement('button', 'dly-btn', 'My Day', 'menu-btn');
    leftMenu.appendChild(dailyBtn);

    // Create button to go to current day tasks
    const allBtn = createElement('button', 'all-btn', 'All tasks', 'menu-btn');
    leftMenu.appendChild(allBtn);

    // Create button to go to current day tasks
    const listContainer = createElement('div', 'list-btn-container', '');
    leftMenu.appendChild(listContainer);
    const listsBtn = createElement('button', 'list-btn', 'My Lists', 'menu-btn');
    listContainer.appendChild(listsBtn);
    let isOpen = false;
    const listDiv = createListDiv();

    //--------------------------EventListeners --------------------------------------//
    // Expand button
    expandMenuButton.addEventListener('click',() => 
    {
        expandWithAni(document.body, leftMenu, 'slideRight');
        expandWithAni(document.body, screenCover, 'opIn');
        expandMenuButton.textContent = '';
    });

    // Animations
    screenCover.addEventListener('click', (e) => 
    {
        retractAnimation(leftMenu, 'slideLeft');
        retractAnimation(e.target, 'opOut');
    });
    retractMenuButton.addEventListener('click', () => 
    {
        retractAnimation(leftMenu, 'slideLeft');
        retractAnimation(screenCover, 'opOut');
    });

    // Extract after animation
    leftMenu.addEventListener('animationend', (e) =>
    {
        if(e.animationName === 'slideLeft')
        {
            removeAfterAni(document.body, e.target, 'slideLeft');
            removeAfterAni(document.body, screenCover, 'opOut');
            expandMenuButton.textContent = '☰';
        }
    });

    listsBtn.addEventListener('click', () => 
    {
        isOpen ? retractAnimation(listDiv, 'slideUp') : expandWithAni(listContainer, listDiv, 'slideDown');
        isOpen = !isOpen;
        console.log(isOpen);
    });
    listDiv.addEventListener('animationend', (e) => 
    {
        if(e.animationName === 'slideUp')
        {
            removeAfterAni(listContainer, e.target, 'slideUp');
        }
    } );
}

function expandWithAni(parent, element, ani)
{
    element.classList.toggle(ani);
    parent.appendChild(element);
}

function retractAnimation(element, ani)
{
    var classList = element.classList;
    while (classList.length > 0) {
       classList.remove(classList.item(0));
    }
    element.classList.add(ani);
}

function removeAfterAni(parent, element, ani)
{
    element.classList.remove(ani);
    parent.removeChild(element);
}

function createListDiv()
{
    const container = createElement('div','lists-container', '');
    for (let i = 0; i < 5; i++) 
    {
        const list = createElement('button', 'list-item' + i, 'List ' + i, 'listItem')
        container.appendChild(list);
    }
    return container;
}
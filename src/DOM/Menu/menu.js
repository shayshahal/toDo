import './menu.css';
import createElement from '/src/DOM/elementCreator.js';

export default () =>
{
    //--------------------------Create top menu --------------------------------------//
    const topMenu = createElement('div', 'top-menu','');
    document.body.appendChild(topMenu);

    // Create Menu expending button
    const menuExpandButton = createElement('button', 'menu-expand-btn', '☰');
    topMenu.appendChild(menuExpandButton);

    //--------------------------Create left menu --------------------------------------//
    const leftMenu = createElement('div', 'left-menu','', '');

    // Horizontal div for menu button and name
    const topDivLeftMenu = createElement('div', 'top-div-left-menu','');
    leftMenu.appendChild(topDivLeftMenu);

    // Menu retract button
    const menuRetractButton = createElement('button', 'menu-retract-btn', '☰');
    topDivLeftMenu.appendChild(menuRetractButton);

    // Name of site
    const credit = createElement('p', 'menu-site-name', '©Shay Shahal');
    topDivLeftMenu.appendChild(credit);

    // Create screen cover for rest of main screen when menu is open
    const screenCover = createElement('div', 'screen-cover', '');

    // Create button to go to current day tasks
    const dailyBtn = createElement('button', 'dly-btn', 'My Day', 'menu-btn');
    leftMenu.appendChild(dailyBtn);

    // Create button to go to current day tasks
    const listsBtn = createElement('button', 'list-btn', 'My Lists', 'menu-btn');
    leftMenu.appendChild(listsBtn);
    
    const listDiv = createListDiv();

    // Create button to go to current day tasks
    const allBtn = createElement('button', 'all-btn', 'All tasks', 'menu-btn');
    leftMenu.appendChild(allBtn);

    //--------------------------EventListeners --------------------------------------//
    // Expand button
    menuExpandButton.addEventListener('click',() => 
    {
        expandWithAni(leftMenu, 'slideIn');
        expandWithAni(screenCover, 'opIn');
    });

    // Animations
    screenCover.addEventListener('click', (e) => 
    {
        retractAnimation(e.target, 'opOut');
        retractAnimation(leftMenu, 'slideLeft');
    });
    menuExpandButton.addEventListener('click', () => 
    {
        retractAnimation(screenCover, 'opOut');
        retractAnimation(leftMenu, 'slideLeft');
    });

    // Extract after animation
    leftMenu.addEventListener('animationend', (e) =>
    {
        removeAfterAni(e, 'slideLeft');
        removeAfterAni(screenCover, 'slideLeft');
    });
    listDiv.addEventListener('animationend', (e) => removeAfterAni(e, 'slideUp'));
}

function expandWithAni(element, ani)
{
    element.classList.add(ani);
    document.body.appendChild(element);
}

function retractAnimation(element, aniName)
{
    var classList = element.classList;
    while (classList.length > 0) {
       classList.remove(classList.item(0));
    }
    element.classList.add(aniName);
}

function removeAfterAni(element, ani)
{
    if(element.animationName !== aniName)
        return false;
    element.classList.remove(ani);
    document.body.removeChild(element);
}

function createListDiv()
{
    const container = createElement('div','lists-container', '');
    return container;
}
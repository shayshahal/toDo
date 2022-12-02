import '/src/styles/menu.css';

export default () =>
{
    //--------------------------Create top menu --------------------------------------
    const topMenu = createElement('div', 'top-menu','');
    document.body.appendChild(topMenu);
    // Create Menu expending button
    const menuExpandButton = createElement('button', 'menu-expand-btn', '☰');
    topMenu.appendChild(menuExpandButton);


    //--------------------------Create left menu --------------------------------------
    const leftMenu = createElement('div', 'left-menu','', '');
    // Horizontal div for menu button and name
    const topDivLeftMenu = createElement('div', 'top-div-left-menu','');
    leftMenu.appendChild(topDivLeftMenu);
    // Menu retract button
    const menuRetractButton = createElement('button', 'menu-retract-btn', '☰');
    topDivLeftMenu.appendChild(menuRetractButton);
    // Name of site
    const siteName = createElement('p', 'menu-site-name', 'Welcome to ToDo');
    topDivLeftMenu.appendChild(siteName);
    // Create screen cover for rest of main screen when menu is open
    const screenCover = createElement('div', 'screen-cover', '');

    menuExpandButton.addEventListener('click',() => expand(leftMenu, screenCover));
    screenCover.addEventListener('click', (e) => retractAnimation(leftMenu, e.target));
    menuRetractButton.addEventListener('click', () => retractAnimation(leftMenu, screenCover));
    leftMenu.addEventListener('animationend', function(e)
    {
        console.log(e.animationName)
        if(e.animationName === 'slideOut')
            retract(screenCover, leftMenu);
    });
}

function expand(leftMenu, screenCover)
{
    leftMenu.classList.add('slideIn');
    document.body.appendChild(leftMenu);
    screenCover.classList.add('opIn');
    document.body.appendChild(screenCover);
}
function retractAnimation(leftMenu, screenCover)
{
    leftMenu.classList.remove('slideIn');
    leftMenu.classList.add('slideOut');
    screenCover.classList.remove('opIn');
    screenCover.classList.add('opOut');
}
function retract(screenCover, leftMenu)
{
    leftMenu.classList.remove('slideOut');
    document.body.removeChild(leftMenu);
    screenCover.classList.remove('opOut');
    document.body.removeChild(screenCover);
}

function createElement(eType, id, textContent, className = false)
{
    const element = document.createElement(eType);
    element.textContent = textContent;
    element.id = id;
    if(className)
        element.classList.add(className);
    return element;
}
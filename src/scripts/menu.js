import '/src/styles/menu.css';

export default () =>
{
    // Create small menu
    const hoverMenu = document.createElement('div');
    hoverMenu.id = 'hover-menu-small';
    document.body.appendChild(hoverMenu);

    // Screen cover
    const screenCover = document.createElement('div');
    screenCover.id = 'screen-cover';

    // Add hover event
    hoverMenu.addEventListener('mouseenter',(e) => expand(e, screenCover));
    screenCover.addEventListener('click', (e) => retract(e, hoverMenu));

    createMenuIcon(hoverMenu);
    createMyDayButton(hoverMenu);

}
function expand(e, screenCover)
{
    e.target.style.width = '12vw';
    document.body.appendChild(screenCover);
}
function retract(e, hoverMenu)
{
    hoverMenu.style.width = '4vw';
    document.body.removeChild(e.target);
}

function createMenuIcon(parent)
{
    const menuIcon = document.createElement('div');
    menuIcon.id = 'menu-icon';
    parent.appendChild(menuIcon);
} 

function createMyDayButton(parent)
{
    const myDay = document.createElement('button');
    myDay.textContent = 'My Day';
    myDay.id = 'myday-btn';
    myDay.classList.add('menu-btn');
    parent.appendChild(myDay);
}
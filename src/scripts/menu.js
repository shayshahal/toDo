import '/src/styles/menu.css';

export default () =>
{
    // Create small menu
    const hoverMenu = document.createElement('div');
    hoverMenu.id = 'hover-menu-small';
    document.body.appendChild(hoverMenu);
    const menuIcon = document.createElement('div');
    menuIcon.textContent = '☰';
    menuIcon.id = 'menu-icon';
    hoverMenu.appendChild(menuIcon);
    // Add hover event
    hoverMenu.addEventListener('mouseenter', expand);
    hoverMenu.addEventListener('mouseleave', retract);
}
function expand(e)
{
    e.target.style.width = '16vw';
}
function retract(e)
{
    e.target.style.width = '4vw';
}
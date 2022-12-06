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
    `./${name}`).then(({ default: loadTab})=>{loadTab()});
}

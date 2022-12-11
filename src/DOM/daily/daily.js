import './daily.css';
import {createAddForm, createElement} from "../domManipulator";

export default () =>
{
    const content = document.getElementById('content');

    const divList = createElement('div', 'div-list','');
    content.appendChild(divList);

    const titleList = createElement('div', 'title-list', 'My Day');
    divList.appendChild(titleList);

    const taskContainer = createElement('div', 'task-container', '');
    divList.appendChild(taskContainer);

    const addForm = createAddForm();
    divList.appendChild(addForm);


}
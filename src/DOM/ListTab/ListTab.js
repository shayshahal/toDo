import './ListTab.css';
import {createElement, createList} from "../domManipulator";
import { getList } from '../../Logic/user';

export default (name) =>
{
    const content = document.getElementById('content');

    const divList = createElement('div', 'div-list','');
    content.appendChild(divList);

    const titleList = createElement('div', 'title-list', name);
    divList.appendChild(titleList);

    const list = getList(name);
    if(!list)
        return;
    const listContainer = createList(list);
    divList.appendChild(listContainer);

}
import './daily.css';
import {createElement, createList} from "../domManipulator";
import { getList } from '../../Logic/user';

export default () =>
{
    const content = document.getElementById('content');

    const divList = createElement('div', 'div-list','');
    content.appendChild(divList);

    const titleList = createElement('div', 'title-list', 'My Day');
    divList.appendChild(titleList);

    const list = getList('My Day');
    const listContainer = createList(list);
    divList.appendChild(listContainer);

}
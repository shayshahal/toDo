import './ListTab.css';
import {createElement, createList} from "../domManipulator";
import { getList } from '../../Logic/user';

export default (name) =>
{
    const content = document.getElementById('content');

    const titleList = createElement('div', 'title-list', name);
    content.appendChild(titleList);

    const list = getList(name);
    if(!list)
        return;
    const listContainer = createList(list);
    content.appendChild(listContainer);

}
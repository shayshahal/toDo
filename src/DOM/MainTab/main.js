import './main.css';
import createElement from '/src/DOM/elementCreator.js';

export default () =>
{
    const content = createElement('div', 'content', '');
    document.body.appendChild(content);
    const welcome = createElement('div', 'welcome', 'Welcome to ToDo');
    content.appendChild(welcome);
    const welcome2 = createElement('div', 'welcome2', 'Your Source of Productivity.');
    content.appendChild(welcome2);
    const button = createElement('button', 'go-to-daily', 'Go to daily tasks →');
    content.appendChild(button);
}
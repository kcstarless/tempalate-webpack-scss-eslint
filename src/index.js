import _ from 'lodash';
import './styles/main.scss';

function component() {
    const element = document.createElement('h1');
    element.innerHTML = "My Tempalte: Webpack, scss"
    return element;
}

const header = document.querySelector('header');
header.append(component());
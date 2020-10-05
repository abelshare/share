import _ from 'lodash';
import './style.css';
import Icon from './icon.jpg';
import Data from './data.xml';

function component() {
  const elemment = document.createElement('div');

  elemment.innerText = _.join(['hellow', 'webpack'], ' ');
  elemment.classList.add('hello');

  const myIcon = new Image();
  myIcon.src = Icon;

  elemment.appendChild(myIcon);

  console.log(Data);

  return elemment;
}

document.body.appendChild(component());

import _ from 'lodash';
import printMe from './print';

function component() {
  const elemment = document.createElement('div');
  const btn = document.createElement('button');

  elemment.innerText = _.join(['hellow', 'webpack'], ' ');

  btn.innerHTML = '点击这里，然后查看 console！';
  btn.onclick = printMe;

  elemment.appendChild(btn);

  return elemment;
}

document.body.appendChild(component());

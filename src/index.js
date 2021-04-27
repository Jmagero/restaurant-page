import createHome from './home.js';

console.log("Hello world!");

// create tabs
const content = document.getElementById('content')
let tabs = document.createElement('div')
tabs.classList.add('tabs')
let arr = ['home', 'menu', 'contact']
for (let i = 0; i < arr.length; i++){
    let tablink  = document.createElement('button')
    tablink.classList.add('tablinks');
    tablink.innerText = arr[i];
    tabs.appendChild(tablink)
}
content.appendChild(tabs);







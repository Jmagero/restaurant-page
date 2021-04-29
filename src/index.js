'use strict';
import createHome from './home.js';
import loadMenu from './menu.js';
import createContact from './contact.js'


const content = document.getElementById('content')
const aboutus = createHome();
const aboutMenu = loadMenu();
const aboutContact = createContact();


// create button
function createBtn(id,text){
    let tablink = document.createElement('button')
    tablink.classList.add('tablinks');
    tablink.setAttribute('id',id)
    tablink.innerText = text
    return tablink;
}

//create nav 
function createNav(){
    const nav = document.createElement('nav');
    nav.classList.add('tabs')
    const home = createBtn('home','home');
    const menu = createBtn('menu', 'menu');
    const contact = createBtn('contact', 'contact');

    nav.append(home,menu,contact)
    return nav
}


content.appendChild(createNav());
content.appendChild(aboutus);


// const about = loadHome();



const homebtn = document.getElementById('home')
homebtn.addEventListener('click', (e) => {
    content.replaceChild(aboutus,content.childNodes[1])
})

const menubtn = document.getElementById('menu')
menubtn.addEventListener('click', (e) => {
    content.replaceChild(aboutMenu,content.childNodes[1])
})

const contactBtn = document.getElementById('contact')
contactBtn.addEventListener('click', (e) =>{
    content.replaceChild(aboutContact,content.childNodes[1])
})








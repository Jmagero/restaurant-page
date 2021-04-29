import createHome from './home';
import loadMenu from './menu';
import createContact from './contact';

const content = document.getElementById('content');
const aboutus = createHome();
const aboutMenu = loadMenu();
const aboutContact = createContact();

// create button
const createBtn = (id, text) => {
  const tablink = document.createElement('button');
  tablink.classList.add('tablinks');
  tablink.setAttribute('id', id);
  tablink.innerText = text;
  return tablink;
};

// create nav
const createNav = () => {
  const nav = document.createElement('nav');
  nav.classList.add('tabs');
  const home = createBtn('home', 'home');
  const menu = createBtn('menu', 'menu');
  const contact = createBtn('contact', 'contact');

  nav.append(home, menu, contact);
  return nav;
};

// Append tabs
content.appendChild(createNav());

// Append home page
content.appendChild(aboutus);

// Add event listeners
const homebtn = document.getElementById('home');
homebtn.addEventListener('click', () => {
  content.replaceChild(aboutus, content.childNodes[1]);
});

const menubtn = document.getElementById('menu');
menubtn.addEventListener('click', () => {
  content.replaceChild(aboutMenu, content.childNodes[1]);
});

const contactBtn = document.getElementById('contact');
contactBtn.addEventListener('click', () => {
  content.replaceChild(aboutContact, content.childNodes[1]);
});

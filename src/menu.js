const createFood = (name, description) => {
  const foodItem = document.createElement('div');
  const foodName = document.createElement('h4');
  foodName.innerText = name;
  const foodDescr = document.createElement('p');
  foodDescr.innerText = description;
  foodItem.appendChild(foodName);
  foodItem.appendChild(foodDescr);
  return foodItem;
};

const createMenu = () => {
  const foods = document.createElement('div');
  foods.className = 'foods';

  foods.appendChild(
    createFood('Pizza', 'Helo pizza'),
  );
  foods.appendChild(createFood('Pizza', 'Helo pizza'));
  return foods;
};

const loadMenu = () => {
  const menuContent = document.createElement('div');
  menuContent.setAttribute('id', 'menucontent');
  menuContent.innerHTML = createMenu().innerHTML;
  return menuContent;
};

export default loadMenu;
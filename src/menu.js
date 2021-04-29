"use strict";

const createFood =(name,description) => {
    let foodItem = document.createElement('div')
    let foodName = document.createElement('h4')
    foodName.innerText = name
    let foodDescr = document.createElement('p')
    foodDescr.innerText = description
    foodItem.appendChild(foodName)
    foodItem.appendChild(foodDescr)
    return foodItem
}

const createMenu = () => {
    const foods = document.createElement('div')
    foods.className = "foods"

    foods.appendChild(
        createFood('Pizza','Helo pizza'))
    foods.appendChild(createFood('Pizza','Helo pizza'))
    return foods

}

const loadMenu = () => {
    const menuContent = document.createElement('div')
    menuContent.setAttribute('id',"menucontent");
    menuContent.innerHTML = createMenu().innerHTML;
    return menuContent;  
}

export default loadMenu;
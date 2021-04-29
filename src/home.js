const createHome =() => {
    let about = document.createElement('div')
    let  title = document.createElement('h3')
    about.setAttribute('id', 'tabcontent')
    title.classList.add('title')
    let para = document.createElement('p')
    para.classList.add('description')
    title.innerHTML = "Indulge yourself"
    para.innerHTML = " Eat, Drink Be Merry"
    about.append(title,para)
    return about;
}

export default createHome;


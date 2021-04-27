
const createHome =() => {
    let about = document.createElement('div')
    let  title = document.createElement('h3')
    content = document.getElementById("content")
    about.setAttribute('id', 'home-tab')
    about.classList.add('tabcontent')
    title.classList.add('title')
    let para = document.createElement('p')
    para.classList.add('description')
    title.innerHTML = "Indulge yourself"
    para.innerHTML = "Your restaurant’s mission statement is more than just a few words strung together. I"
    about.append(title,para)
    console.log(content.appendChild(about));
}

export default createHome;

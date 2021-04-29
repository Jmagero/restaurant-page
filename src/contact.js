
const createContact =() => {
    let contactDiv = document.createElement('div')
    let  title = document.createElement('h3')
    contactDiv.setAttribute('id', 'contact')
    title.classList.add('contact-title')
    let para = document.createElement('p')
    para.classList.add('contact-description')
    title.innerHTML = "CONTACT US"
    para.innerHTML = "Question Not Yet Answered? We are here to help!"
    let input = document.createElement("input");
    input.setAttribute('type', 'text');
    contactDiv.append(title,para,input)
    return contactDiv;
}

export default createContact;

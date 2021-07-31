let ac_list= document.querySelector('.ac-list');
let ac_input = document.querySelector('.ac-input');
export function createLink(name){
    let link = document.createElement('li')
    link.className = 'ac-link'
    link.innerText = name;
    return link
}
export function addLinks(links){
    // clearLinks();
    for(let link of links){
        ac_list.appendChild(link);
        link.addEventListener('click',() => {
            ac_input.value = link.innerText
            clearLinks();
        })
    }
}

export function clearLinks(){
    while(ac_list.children.length > 0){
        let li = ac_list.children[0]
        ac_list.removeChild(li);
    }
}


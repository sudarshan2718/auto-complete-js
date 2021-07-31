import {createLink,addLinks, clearLinks} from './autoComplete.js';
import Trie from './trie.js';
let ac_input = document.querySelector('.ac-input');
let ac_links = document.querySelectorAll('.ac-link');
let ac_trie = new Trie();

fetch('./data/countries.json').then(response => response.json())
.then(data => {
    let names = data.map((country) => country.name.toLowerCase())
    ac_trie.insert_list(names)
})

ac_input.addEventListener('keyup',function(event){
    clearLinks();
    if(event.target.value){
        let auto_links = ac_trie.startsWith(event.target.value.toLowerCase())
        if(auto_links){
            auto_links = auto_links.map((name) => createLink(name)).slice(0,5) 
            addLinks(auto_links)
        }else{
            auto_links = []
            
            auto_links.push(createLink(event.target.value))
            // console.log(auto_links)
            addLinks(auto_links)
        }
    }
})

for(let link of ac_links){
    link.addEventListener('click',() => {
        ac_input.value = link.innerText
        clearLinks();
    })
}



// console.log('hello world')


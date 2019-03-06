const items = document.querySelector('#items');
const box = document.querySelector('#box');

items.addEventListener('click', e => {
    if(e.target.tagName === 'IMG'){
        box.firstChild.src = e.target.src
    }
    
})




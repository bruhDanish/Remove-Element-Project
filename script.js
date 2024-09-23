function preventDefault() {
    const element = document.getElementById('youtube');

    element.addEventListener('click', function(e){
        e.preventDefault()
    }, false)
}

function removeElement() {
    const toBeRemoved = document.querySelector('#images');
    
    toBeRemoved.addEventListener('click', function(e) {
        console.log(e.target.tagName);
        if (e.target.tagName === 'IMG' || e.target.tagName === 'A') {
            let removeIt = e.target.parentNode;
            removeIt.remove()   
        }
    
    }, false)
}

preventDefault()
removeElement()
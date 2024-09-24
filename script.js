const toBeRemoved = document.querySelector('#images');
const resetBtn = document.querySelector('.resetBtn');

const p = document.createElement('p');
let removedElements = [];  // To store removed elements

function preventDefault() {
    const element = document.getElementById('youtube');

    element.addEventListener('click', function(e){
        e.preventDefault();
    }, false);
}

function removeElement() {
    toBeRemoved.addEventListener('click', function(e) {
        console.log(e.target.tagName);
        if (e.target.tagName === 'IMG' || e.target.tagName === 'A') {
            let removeIt = e.target.parentNode;
            removedElements.push(removeIt.cloneNode(true));  // Save a copy of the removed element
            removeIt.remove();   
        }
        if (removedElements.length === 1) {  // Show the reset button only once
            resetPage();
        }
    }, false);
}

function resetPage(){
    p.classList.add('button');
    p.textContent = 'Reset';
    resetBtn.appendChild(p);

    p.style.backgroundColor = '#777';
    p.style.padding = '10px';
    p.style.borderRadius = '5px';
    p.style.cursor = 'pointer';

    newPage();
}

function newPage(){
    p.addEventListener('click', function(e){
        console.log(e.target.tagName);
        resetElements();  // Restore removed elements when reset is clicked
        preventDefault()
    }, false);
}

function resetElements() {
    // Re-append the removed elements back to the original container
    removedElements.forEach(element => {
        toBeRemoved.appendChild(element);
    });
    removedElements = [];  // Clear the stored elements
    p.remove();  // Remove the reset button
}

preventDefault();
removeElement();

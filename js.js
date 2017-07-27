let paragraphs = document.querySelectorAll('p');
let images = document.querySelectorAll('img');
var buttoms = document.querySelectorAll('button');
var button1Pressed = 0;
var button2Pressed = 0;



// Задача 1
function paragraphIsRed(){    
    Array.from(paragraphs, x => x.style.background='red');

}
paragraphIsRed();

// Задача 2
function imgShadow(){    
    Array.from(images, x => x.style.boxShadow ='4px 3px 5px black');
}
imgShadow();

// Задача 3
function paragraphNumbers(){
    Array.from(paragraphs, (x, i) => x.textContent = (i+1) + ' ' + x.textContent);
}
paragraphNumbers();

// Задача 4
for(let i = 0; i < buttoms.length; i++){
    buttoms[i].addEventListener('click', countClick);
}

function countClick(elem){
    let button = elem.target;
    if(button === buttoms[0]){
        button1Pressed += 1;
        button.nextElementSibling.textContent = ' Нажато ' + button1Pressed + ' раз '; 
    }
    else if(button === buttoms[1]){
        button2Pressed += 1;
        button.nextElementSibling.textContent = ' Нажато ' + button2Pressed + ' раз '; 
    }
}


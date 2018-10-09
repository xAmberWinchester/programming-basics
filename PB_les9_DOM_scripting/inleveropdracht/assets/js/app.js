//IN DE LES GEDAAN:

//OPDRACHT 1:
console.log('Opdracht 1:');

let course = document.getElementsByTagName('tr');
let total = 0;
for (let i = 0; i < course.length; i++) {
    const element = course[i].lastElementChild.innerHTML;
    total += element / course.length;
};
console.log('I did it')

const ph = document.getElementById('table');
const tr = document.createElement('tr');
const newListItem = document.createElement('td');
const newListItem2 = document.createElement('td');
newListItem.innerText = 'Gemiddelde cijfer';
newListItem2.innerText = total;

ph.appendChild(tr);
tr.appendChild(newListItem);
tr.appendChild(newListItem2);


// //OPDRACHT 2:
console.log('Opdracht 2:');

function hoi(){
    var lists = document.getElementsByTagName("li");
for(let list in lists) {
    let reminder = list % 2;
    if (reminder == 0) {
        lists[list].classList.add("hoi");

    }
    // else if(reminder == Math.round(reminder)){
    //     lists[list].classList.add("doei");
    // }
}
}
hoi();


// //OPDRACHT 3:
console.log('Opdracht 3:');

function createImageElement(imageSrcName){
    var newImage = document.createElement('img');
    newImage.setAttribute('src','saxofoon.jpg');
    newImage.setAttribute('width','580');
    newImage.setAttribute('height','300');
    newImage.setAttribute('alt','Alt saxofoon');
    document.body.appendChild(newImage);
}
createImageElement();
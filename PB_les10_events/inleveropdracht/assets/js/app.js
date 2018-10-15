//IN DE LES GEDAAN:


// OPDRACHT 1:
let getal = 0;
console.log('Opdracht 1:');


const button = document.getElementById('clickerGame');
button.addEventListener('click', clickEventHandlerClickerGame);
button.classList.add('originalSize');
function clickEventHandlerClickerGame(event) {
    event.preventDefault();
    getal++
    console.log(getal);

    if (getal == 10) {
        button.classList.add('firstTimeSmaller');
    }
    else if (getal == 20) {
        button.classList.add('secondTimeSmaller');
    }
}


//OPDRACHT 2:
console.log('Opdracht 2:');


const sumbitButton = document.getElementById('submit-btn');
sumbitButton.addEventListener('click', clickEventHandler);

const body = document.getElementById('body');
const ph = document.createElement('table');
const tr = document.createElement('tr');
const td = document.createElement('table');
const newListItem = document.createElement('th');
const newListItem2 = document.createElement('th');

body.appendChild(ph);
ph.appendChild(tr);
tr.appendChild(newListItem);
newListItem.innerText = 'Product';
tr.appendChild(newListItem2);
newListItem2.innerText = 'Prijs';

function clickEventHandler(event) {
    event.preventDefault();
    let product = document.getElementById('textInput1').value;
    let price = document.getElementById('textInput2').value;

    if (product == '' && price == '') {
        alert('Je bent vergeten een product en een prijs in te vullen');
    }
    else if (product == '') {
        alert('Je bent vergeten een product bij de prijs in te vullen');
    }
    else if (price == '') {
        alert('Je bent vergeten de prijs van het product in te vullen')
    }
    else {
        const tr = document.createElement('tr');
        const tdProducten = document.createElement('td');
        const tdPrijzen = document.createElement('td');
        const tdDelete = document.createElement('td');
        tr.appendChild(tdProducten);
        tr.appendChild(tdPrijzen);
        ph.appendChild(tr);
        tr.appendChild(tdDelete);
        tdProducten.innerText = product;
        tdPrijzen.innerText = price;
        tdDelete.innerHTML = '<a href=#>verwijderen</a>';
        tdDelete.addEventListener('click', deleteProduct);
        getTotal();
    }

    function deleteProduct() {
        const deleteRow = this.parentNode.parentNode;
        deleteRow.removeChild(this.parentNode);
        getTotal();
    }

    function getTotal() {
        let rows = document.querySelectorAll("table tr td:nth-child(2)");
        let sum = 0;
        for (let i = 0; i < rows.length; i++) {
            sum += Number(rows[i].textContent);
            sum = Math.round(sum * 100) / 100;
        }
        document.getElementById("sum").textContent = '€' + sum;
    }
}   
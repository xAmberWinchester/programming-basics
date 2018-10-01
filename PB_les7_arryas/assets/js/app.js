//Opdracht 1:

function randomLapRounds(){
const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12]; 
var rand = lapRounds[Math.floor(Math.random() * lapRounds.length)];
console.log(rand);
}
randomLapRounds();

//Opdracht 2:

const allMyRecords = [
    ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
    ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]];

for (let i = 0; i < allMyRecords.length; i++) {

    for (let a = 0; a < allMyRecords[i].length; a++) {
        const element = allMyRecords[i][a];
        console.log(element);
    }
}

//Opdracht 3:

lapRound2([2.99, 3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12]);

function lapRound2(lapRounds) {
   let filteredRounds = lapRounds.filter(function (lapRounds) {
       return lapRounds < 4
   });
   console.table(filteredRounds)
}
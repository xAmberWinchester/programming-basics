//Opdracht 1 -> kijken of een nummer even of oneven is:
let number = 0;

function evenOdd(number) {
    let reminder = number % 2;
    if (reminder == 0) {
        console.log("even");
    } else if (reminder == Math.round(reminder)) {
        console.log("odd");
    } else {
        console.log("invalid");
    }
}
 
evenOdd(0);

//Opdracht 2 -> woordje laten verdwijenen

var str = 'Programming is not so cool!'
var res = str.replace('not', ''); 
console.log (res);

//Opdracht 3 -> Rare string vergelijken, dit is raar omdat je een string met een nummer gaat vergelijken. Letters en een waarde zijn andere dingen.

var string = 'Ik woon in Naboo';
var b = 1400;

console.log(string == b);
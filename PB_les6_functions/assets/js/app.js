console.log("Opdracht 1:")
//opdracht 1:

//fibonaccireesk opstellen i guess
function Fibonacci(){
console.log(0);
console.log(1);


var a;
var fib = [];

fib [0] = 0;
fib [1] = 1;

for (a = 2; a <= 10; a++){
    fib[a] = fib[a - 2] + fib[a - 1];
    console.log(fib[a]);
}
}
Fibonacci();

console.log("Opdracht 2:")
//opdracht 2:


//countDown van 10 naar 0
var i = 10;
function countDown() {
    var countdownTimer = setInterval(function() {
        console.log(i);
        i = i - 1;
        if (i <= 0) {
            clearTimeout(countdownTimer);
            console.log('HAPPY ' + new Date().getFullYear());
        }
    }, 1000);
}
countDown(); 

console.log("Opdracht 3:")
//Opdracht 3:

// kloten met hoists
function hoist() {
    a = 55;
    var b = 765;
}
  
hoist();
  
console.log(a); 
console.log(b); 
 
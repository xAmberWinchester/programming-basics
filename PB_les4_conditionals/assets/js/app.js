//opdracht 1:
let punt = 2;

//hiermee kun je kijken wat je resultaat is met je behaalde punt

if (punt > 0 && punt < 6) {
    const messagea = 'helaas, je hebt een onvoldoende';
    console.log(messagea);
}

else if (punt >= 6 && punt < 7) {
    const messageb = 'goed gedaan! je hebt een voldoende';
    console.log(messageb);
}

else if (punt >= 7 && punt < 9) {
    const messagec = 'lekker bezig! je hebt goed gescoord';
    console.log(messagec);
}

else if (punt <= 10) {
    const messaged = 'gewelding gedaan! je hebt uitmuntend gescoord';
    console.log(messaged);
}

else if (punt > 10) {
    const messagee = 'sorry, dit getal is niet van toepassing';
    console.log(messagee);
}

else {
    const messagef = 'error';
    console.log(messagef);
}


//opdracht 2:

//dit is het zelfde als opdracht 1 maar dan met een switch

const cijfer = 5.5;

switch (cijfer) {
    case 0:
        console.log('helaas, je hebt een onvoldoende');
        break;
    case 1:
        console.log('helaas, je hebt een onvoldoende');
        break;
    case 2:
        console.log('helaas, je hebt een onvoldoende');
        break;
    case 3:
        console.log('helaas, je hebt een onvoldoende');
        break;
    case 4:
        console.log('helaas, je hebt een onvoldoende');
        break;
    case 5:
        console.log('helaas, je hebt een onvoldoende');
        break;
    case 6:
        console.log('lekker bezig! je hebt goed gescoord');
        break;
    case 7:
        console.log('lekker bezig! je hebt goed gescoord');
        break;
    case 8:
        console.log('gewelding gedaan! je hebt uitmuntend gescoord');
        break;
    case 9:
        console.log('gewelding gedaan! je hebt uitmuntend gescoord');
        break;
    case 10:
        console.log('gewelding gedaan! je hebt uitmuntend gescoord');
    default: 
        console.log('error, kan alleen gehele getallen zijn')
}

//opdracht 3:

//alle variable met 3 voorwaarden + unieke message's

const purchasedBook = false;
let job = 'teacher';
const inTrain = false;

if (purchasedBook == true && job == 'teacher' && inTrain == true){
    let message1 = 'finally you can enjoy my book!';
    console.log(message1);
}

else if (purchasedBook != true && job == 'teacher' && inTrain == true){
    let message2 = 'you still have to purchase a book!';
    console.log(message2);
}

else if (purchasedBook == true && job != 'teacher' && inTrain == true){
    let message3 = "you're not my teacher";
    console.log(message3);
}

else if (purchasedBook == true && job == 'teacher' && inTrain != true){
    let message4 = "you're not in a train";
    console.log(message4);
}

else if (purchasedBook != true && job != 'teacher' && inTrain == true){
    let message5 = "you can't teach me";
    console.log(message5);
}

else if (purchasedBook == true && job != 'teacher' && inTrain != true){
    let message6 = 'you may have purchased a book, but your not a in the train';
    console.log(message6);
}

else if (purchasedBook != true && job == 'teacher' && inTrain != true){
    let message7 = "youre a teacher, but you haven't purchased a book and aren't in the train";
    console.log(message7);
}

else if (purchasedBook != true && job != 'teacher' && inTrain != true){
    let message8 = "what are you doing here? You aren't a teacher and you haven't purchased a book AND you aren't in the train";
    console.log(message8);
}

else {
    let message9 = 'error';
    console.log(message)
}

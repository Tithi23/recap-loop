//variable !!!!!
var bottleColor = "Yellow";
var waterQuantity = 1;
var isFull = true;

//array!!!!!!
var items = ["bottle", "Mug", "Paper", "Pen"];
items.indexOf('logens'); // -1
items.push('envelop');
items.push('watch');
items.pop();

//conditions!!!
if (items.length >= 4) {
    console.log('you have many stuff of your desk');
}
else if (items.length == 4) {
    console.log('you have four items');
}
else {
    console.log('wow!!! you have clean desk');
}

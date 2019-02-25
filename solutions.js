var fruits = ['apple' , 'pineapple' , 'watermelon', 'orange' , 'banana' , 'kiwi'];

for (i of fruits) {
    console.log(i);
}

for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//with periods

for (z of fruits) {
    console.log(z + '.'.repeat(fruits.indexOf(z) + 1))
}


var inputData = [];
var questions = ['adjective', 'adjective', 'noun', 'noun', 'plural noun', 'game', 'plural noun'];
// for (var i = 0; i <= 6; i++) {
//     inputData[i] = prompt('Please enter an ' + questions[i]);
// }

var story = "A vacation is when you take a trip to some " + inputData[0] + " place with your " + inputData[1] + " family. Usually you go to some place that is near a/an " + inputData[2] + " or up on a/an " + inputData[3] + ". A good vacation place is one where you can ride " + inputData[4] + 
" or play " + inputData[5] + " or go hunting for " + inputData[6] + "."

alert("here is your story " + story);



var gallons = prompt("This is gallons to pounds converter. Enter the number of gallons");
var waterWeigher = gallons * 8.33;
alert(gallons + " gallons of water is " + waterWeigher + " pounds");

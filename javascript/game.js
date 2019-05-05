// GLOBAL VARIABLES ======================================================================================

// Records wins.
var wins = 0;

// Records losses.
var losses = 0;

// Records user number.
var userCount = 0;

// Records target number.
var targetCount = 1;


// Variables that hold references to where we want to display info. *** WILL COME BACK TO
var winsText = $('wins').text();
var lossesText = $('losses').text();


// FUNCTIONS =============================================================================================

// Function generates random target and crystal values.
function resetValues() {
    // Displays randomly generated target number to be matched.
    var targetCount = Math.floor(Math.random() * 120 + 19);
    $('#targetNumber').text(targetCount)

    // Assigns random number to each crystal.
    // Randomly generates number between 1 - 12 and assigns them to a variable to each crystal.
    var purpleNumber = Math.floor(Math.random() * 12 + 1);
    var blueNumber = Math.floor(Math.random() * 12 + 1);
    var redNumber = Math.floor(Math.random() * 12 + 1);
    var yellowNumber = Math.floor(Math.random() * 12 + 1);

    // Attaches the random-number variable to each crystal id.
    $("#button-purple").attr('value', purpleNumber);
    $("#button-blue").attr('value', blueNumber);
    $("#button-red").attr('value', redNumber);
    $("#button-yellow").attr('value', yellowNumber);


}
// Resets the values of target and crystal values.
resetValues();



// Function runs when game page starts.
$(document).ready(function() {

    // Adds crystal-value to userCount
    // and displays new value as text.
    $('.crystal-button').click(function() {
        var crystalValue = ($(this).attr('value'));
        crystalValue = parseInt(crystalValue);
        userCount += crystalValue;
        $('#userNumber').html(userCount);
        // console logs crystal value.
        console.log($(this).attr('value'));
    })

    // This logic alerts "You Win!" if user number is equal to target number and incrememts win on HTML.
    if (userCount === targetCount) {
        winsText++;
        // alert("You Win!");
        console.log("U WIN");
        $('#wins').html(wins);
        // This logic alerts "You Lose!" if user number is greater than target number and incrememts loss.
    } else if (userCount > targetCount) {
        losses++;
        // alert("You Lose!");
        console.log("U LOSE");
        $('#losses').html(losses);
    }
});

// var targetNumber = 53;

// $("#number-to-guess").text(targetNumber);

// var counter = 0;

// // Now for the hard part. Creating multiple crystals each with their own unique number value.

// // We begin by expanding our array to include four options.
// var numberOptions = [10, 5, 3, 7];

// // Next we create a for loop to create crystals for every numberOption.
// for (var i = 0; i < numberOptions.length; i++) {

//   // For each iteration, we will create an imageCrystal
//   // var imageCrystal = $("<img>");

//   // First each crystal will be given the class ".crystal-image".
//   // This will allow the CSS to take effect.
//   // imageCrystal.addClass("crystal-image");

//   // Each imageCrystal will be given a src link to the crystal image
//   imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

//   // Each imageCrystal will be given a data attribute called data-crystalValue.
//   // This data attribute will be set equal to the array value.
//   imageCrystal.attr("data-crystalvalue", numberOptions[i]);

//   // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
//   $("#crystals").append(imageCrystal);
// }

// // This time, our click event applies to every single crystal on the page. Not just one.
// $(".crystal-image").on("click", function () {

//   // Determining the crystal's value requires us to extract the value from the data attribute.
//   // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
//   // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
//   // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

//   var crystalValue = ($(this).attr("data-crystalvalue"));
//   crystalValue = parseInt(crystalValue);
//   // We then add the crystalValue to the user's "counter" which is a global variable.
//   // Every click, from every crystal adds to the global counter.
//   counter += crystalValue;

//   // All of the same game win-lose logic applies. So the rest remains unchanged.
//   alert("New score: " + counter);

//   if (counter === targetNumber) {
//     alert("You win!");
//   }

//   else if (counter >= targetNumber) {
//     alert("You lose!!");
//   }
// FUNCTIONS =============================================================================================

// Function runs when game page starts.
$(document).ready(function() {

    // Records wins.
    var wins = 0;

    // Records losses.
    var losses = 0;

    // Records user number.
    var userCount = 0;

    // Records target number.
    var targetCount;
    console.log()
        // Function generates random target and crystal values.
    function resetValues() {

        // Sets userCount value to 0.
        userCount = 0;
        console.log('userCount', userCount)
        $('#userNumber').text(userCount);

        // Displays randomly generated target number to be matched.
        targetCount = Math.floor(Math.random() * 120 + 19);
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

    // Variables that hold references to where we want to display info. *** WILL COME BACK TO
    var winsText = $('wins').text();
    var lossesText = $('losses').text();

    // Adds crystal-value to userCount
    // and displays new value as text.
    $('.crystal-button').click(function() {
        var crystalValue = ($(this).attr('value'));
        crystalValue = parseInt(crystalValue);
        userCount += crystalValue;
        $('#userNumber').html(userCount);
        // console logs crystal value.
        console.log($(this).attr('value'));
        addScore();
    })

    // This function checks if the user score matches or has gone over the target score and determines
    // if the user has won or lost and resets values.
    function addScore() {
        console.log('targetCount', targetCount)
        console.log('userCount', userCount)

        // This logic alerts "You Win!" if user number is equal to target number and incrememts win on HTML.
        if (userCount === targetCount) {
            wins++;
            alert("You Win!");
            $('#wins').html(wins);
            resetValues();

            // This logic alerts "You Lose!" if user number is greater than target number and incrememts loss.
        } else if (userCount > targetCount) {
            losses++;
            alert("You Lose!");
            $('#losses').html(losses);
            resetValues();
        }
    }
});
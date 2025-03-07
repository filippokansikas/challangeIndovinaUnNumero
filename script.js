function playGame() {
    const targetNumber = Math.floor(Math.random() * 10);
    
    const computerGuess = Math.floor(Math.random() * 10);
    const userGuess = document.getElementById("number").value;

    document.getElementById('computer-number').innerHTML = " Computer Number: " + computerGuess;
    document.getElementById('target-number').innerHTML = targetNumber ;
    const userDiff = Math.abs(targetNumber - userGuess);
    const computerDiff = Math.abs(targetNumber - computerGuess);

    if (userDiff < computerDiff) {
        document.getElementById('risultato').innerHTML = "Hai vinto!"
    } else if (userDiff > computerDiff) {
        document.getElementById('risultato').innerHTML = "Hai perso!"
    } else {
        document.getElementById('risultato').innerHTML = "Pareggio"
    }
}
function increase() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 9 ?  value ++: value;
    document.getElementById('number').value = value;
}
function decrease() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value > 0 ?  value-- : value;
    document.getElementById('number').value = value;
}

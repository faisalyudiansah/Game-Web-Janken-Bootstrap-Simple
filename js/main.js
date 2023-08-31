// play again
var ulang = true
while (ulang === true) {
    // menangkap pilihan user
    var inputSuit = prompt('Choose : Scissors, Rock, Paper')

    // Jika tidak null atau cancel, Lanjutkan permainan
    if (inputSuit !== null) {
        // Ubah awal kata menjadi huruf kapital
        function hurufKapital(inputSuit) {
            return inputSuit.slice(0, 1).toUpperCase() + inputSuit.slice(1).toLowerCase()
        }
        var user = hurufKapital(inputSuit)

        // menangkap pilihan komputer & men-generate bilangan random
        var comp = Math.random()
        if (comp < 0.34) {
            comp = 'Scissors'
        } else if (comp >= 0.34 && comp < 0.66) {
            comp = 'Rock'
        } else {
            comp = 'Paper'
        }

        // menentukan rules
        var result = ''
        if (user == comp) {
            result = 'TIE'
        } else if (user == 'Scissors') {
            // if (comp == 'Rock') {
            //     result = 'LOSE'
            // } else {
            //     result = 'WIN'
            // }
            result = (comp == 'Rock') ? 'LOSE' : 'WIN'       // OPERATOR TERNARY
        } else if (user == 'Rock') {
            result = (comp == 'Scissors') ? 'WIN' : 'LOSE'
        } else if (user == 'Paper') {
            result = (comp == 'Scissors') ? 'LOSE' : 'WIN'
        } else {
            result = 'You typed the wrong word!'
        }

        // menampilkan result
        if (result == 'TIE') {
            alert('You choose = ' + user + '\n' + 'Computer choose = ' + comp + '\n' + 'Result = Tie!')
        } else if (result == 'WIN') {
            alert('You choose = ' + user + '\n' + 'Computer choose = ' + comp + '\n' + 'Result = You win!')
        } else if (result == 'LOSE') {
            alert('You choose = ' + user + '\n' + 'Computer choose = ' + comp + '\n' + 'Result = You lose!')
        } else {
            alert(result)
        }
    } else {
        // Jika membatalkan permainan di awal
        alert('You have canceled the game')
    }
    ulang = confirm('Want to try again?')
}

var infoMatch = ''
if (result == 'TIE') {
    infoMatch = 'The match just ended in a draw'
} else if (result == 'WIN') {
    infoMatch = 'Congratulations! You just won the game'
} else if (result == 'LOSE') {
    infoMatch = 'You just lost the game'
} else {
    infoMatch = 'The game has been cancelled'
}
document.getElementById('message').innerHTML = infoMatch;
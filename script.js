let flag = true
let moves = 0
$(document).ready(function () {

    //suffle

    shuffle()
    // suffle function call
    $('#shuffle').click(shuffle);

    //main logic
    $(".box").click(function () {
        if (!flag) return;
        let allbox = $(".box");
        let index = allbox.index(this);
        let emptyIndex = allbox.index($(".empty"));

        // console.log("empty index "+emptyIndex)

        let validMoves = []

        if (index == 0) {
            validMoves = [index + 1, index + 3]
        } else if (index == 1) {
            validMoves = [index - 1, index + 1, index + 3]
        } else if (index == 2) {
            validMoves = [index - 1, index + 3]
        } else if (index == 3) {
            validMoves = [index - 3, index + 1, index + 3]
        } else if (index == 4) {
            validMoves = [index - 1, index + 1, index - 3, index + 3];
        } else if (index == 5) {
            validMoves = [index - 3, index - 1, index + 3]
        } else if (index == 6) {
            validMoves = [index - 3, index + 1]
        } else if (index == 7) {
            validMoves = [index - 1, index + 1, index - 3]
        } else if (index == 8) {
            validMoves = [index - 1, index - 3];
        }
        // console.log(validMoves)
        if (validMoves.includes(emptyIndex)) {
            let temp = $(this).text();
            // console.log($(this).text())
            $(this).text('');

            $(this).addClass('empty');

            allbox.eq(emptyIndex).text(temp).removeClass('empty');

            moves++;
            $('#moves').text('Moves: ' + moves);
        }
        if (checkWin()) {
            $('#win').text(' Puzzle Solved in ' + moves + ' moves');

            setTimeout(function () {
                alert(' Congratulation 🎉\n Puzzle Solved in ' + moves + ' moves');
                moves = 0;
                $('#moves').text('Moves: ' + moves);
            }, 50);
            flag = false
            $("#msg").text("Click on Shuffle button if you want to play again 🙂")
        }
        else {
            $('#win').text(' ');
        }

    })

  
})

function checkWin() {
    let win = ['1', '2', '3', '4', '5', '6', '7', '8', ''];

    // Get the current sequence from the puzzle boxes
    let current = $('.box').map(function () {
        return $(this).text();
    }).get();

    for (let i = 0; i < 9; i++) {
        if (current[i] !== win[i]) {
            return false;
        }
    }
    return true;

}

function shuffle() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, '']

    arr.sort(() => Math.random() - 0.5)

    $(".box").each(function (n) {
        let value = arr[n];

        $(this).text(value);

        if (value == '') {
            $(this).addClass('empty')
        } else {
            $(this).removeClass('empty')
        }
    })

    moves = 0;
    $("#moves").text("moves :" + moves)
    $("win").text('')
    flag = true
    $("#msg").text('')
}




$("#givup").click(function () {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, '']
    $(".box").each(function (n) {
        let value = arr[n];

        $(this).text(value);

        if (value == '') {
            $(this).addClass('empty')
        } else {
            $(this).removeClass('empty')
        }
    })
    moves = 0;
    $("#moves").text("moves : " + moves)
    flag = false
    $("#msg").text("Click on Shuffle button if you want to play again 🙂")
})


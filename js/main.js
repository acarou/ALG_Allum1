$(document).ready(function () {

    createMatches(12);

    $('.main-image').children().click(function () {
        let matches = $('.main-image').children();
        let number = matches.length-this.id;

        if (number <= 3) {
            matches.slice(-Math.abs(number)).fadeOut("normal",function () {
                $(this).remove();
                removeMatch();
            });
        }


    }).hover(function () {
        let matches = $('.main-image').children();
        let number = matches.length-this.id;

        if (number <= 3) {
            matches.slice(-Math.abs(number)).addClass('hover');
        }


    }, function () {
        let matches = $('.main-image').children();
        matches.slice(-3).removeClass('hover');
    });
});


function createMatches(number) {
    for (var i = 0; i < number; i++) {
        $('.main-image').append('<img class="col-1" src="asset/allumok.png" alt="alumette" id="' + i + '">');
    }
}

function removeMatch() {
    let matches = $('.main-image').children();

    let number = -Math.abs(Math.floor(Math.random() * 3) + 1);

    if (matches.length == 2) {
        number = -1
    }
    else if (matches.length == 3) {
        number = -2
    }
    else if (matches.length == 4) {
        number = -3
    }
    else if (matches.length == 1) {
        alert('Vous avez gagner');
        location.reload();
    }
    else if (matches.length < 1) {
        alert('Vous avez perdue');
        location.reload();
    }
    //let number = -Math.abs(matches.length%3)-1;

    matches.slice(number).fadeOut("normal", function () {
        $(this).remove();
    });
}


$(document).ready(function () {

    createMatches(11);

    $('.main-image').children().click(function () {
        let matches =  $('.main-image').children();
        let length = matches.length - 1;

        if (length == this.id) {
            $(this).remove();
            removeMatch();
        }else if (length-1 == this.id) {
            matches.eq(-2).remove();
            matches.eq(-1).remove();
            removeMatch();
        } else if (length-2 == this.id) {
            matches.eq(-3).remove();
            matches.eq(-2).remove();
            matches.eq(-1).remove();
            removeMatch();
        }


    }).hover(function () {
        let matches =  $('.main-image').children();
        let length = matches.length - 1;



        if (length == this.id) {
            $(this).addClass('hover');
        }else if (length-1 == this.id) {
            matches.eq(-2).addClass('hover');
            matches.eq(-1).addClass('hover');
        } else if (length-2 == this.id) {
            matches.eq(-3).addClass('hover');
            matches.eq(-2).addClass('hover');
            matches.eq(-1).addClass('hover');
        }


    }, function () {
        let matches =  $('.main-image').children();
        matches.eq(-2).removeClass('hover');
        matches.eq(-3).removeClass('hover');
        matches.eq(-1).removeClass('hover');
    });
});


function createMatches(number) {
    for (var i = 0; i < number; i++) {
        $('.main-image').append('<img class="col-1" src="asset/allumok.png" alt="alumette" id="' + i + '">');
    }
}

function removeMatch() {
    sleep(500);

    let matches =  $('.main-image').children();
    let delay = 800;

    switch (Math.floor(Math.random()*3)+1) {
        case 1:
            console.log('1');
            matches.eq(-1).fadeOut("normal",function () {
                $(this).remove();
            });
            break;
        case 2:
            console.log('2');
            matches.eq(-2).fadeOut("normal",function () {
                $(this).remove();
            });
            matches.eq(-1).fadeOut("normal",function () {
                $(this).remove();
            });
            break;
        case 3:
            console.log('3');
            matches.eq(-3).fadeOut("normal",function () {
                $(this).remove();
            });
            matches.eq(-2).fadeOut("normal",function () {
                $(this).remove();
            });
            matches.eq(-1).fadeOut("normal",function () {
                $(this).remove();
            });
            break;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


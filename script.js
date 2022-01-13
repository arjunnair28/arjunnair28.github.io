$(document).ready(() => {

    let app = $('#welcomeText')[0];

    let typewriter = new Typewriter(app, {
        cursor: '&#9646;'
    });

    if (location.href.indexOf('#') === -1) {
        typewriter.typeString("Hi. I'm Arjun").start().callFunction(() => {
            setTimeout(() => {
                $('#sidebar').fadeIn('slow');
                $('header').fadeIn('slow');
                $('header').css('display', 'flex');
                $('.scrollArrow').css('display', 'block');
                $('section').css('display', 'flex');
                $('#contact').css('display', 'none');
            }, 500);
        });
    } else {
        $('.Typewriter__wrapper').text("Hi. I'm Arjun");
        $('#sidebar').css('display','block');
        $('header').css('display', 'flex');
        $('.scrollArrow').css('display', 'block');
        $('section').css('display', 'flex');
        $('#contact').css('display', 'none');
    }
    
    $('.burger').click(() => {
        $('header').toggleClass('active');
        $('section').toggleClass('active');
        $('.navSections').toggleClass('active');
        $('#transparencyCover').toggle();
    });

    $('#aboutWorkLink').hover(() => {
        $('#aboutWorkLink').html("Take a look at some of the places I've worked at &rarr;");
    }, () => {
        $('#aboutWorkLink').text("Take a look at some of the places I've worked at.");
    });

    $('#aboutContactLink').hover(() => {
        $('#aboutContactLink').html("reach out to me &rarr;");
    }, () => {
        $('#aboutContactLink').text("reach out to me");
    });

    $('#resumeLink').hover(() => {
        $('#resumeLink').html("resume &rarr;");
    }, () => {
        $('#resumeLink').text("resume.");
    });

    $('#adknownTile').hover(() => {
        $('#adknownInfoCover').toggleClass('show');
    });

    $('#g42Tile').hover(() => {
        $('#g42InfoCover').toggleClass('show');
    });

    $('#adknownReportLink').hover(() => {
        $('#adknownReportLink').html("Read more &rarr;");
    }, () => {
        $('#adknownReportLink').text("Read more.");
    });

})

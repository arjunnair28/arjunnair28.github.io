$(document).ready(() => {

    $('html, body').css({
        overflow: 'hidden',
        height: '100%'
    });

    let app = $('#welcomeText')[0];

    let typewriter = new Typewriter(app, {
        cursor: '&#9646;'
    });

    emailjs.init('user_C3zTNIcbpRIRXac4Qp0gV');

    if (location.href.indexOf('#') === -1) {
        typewriter.typeString("Hi. I'm Arjun").start().callFunction(() => {
            setTimeout(() => {
                $('#sidebar').fadeIn('slow');
                $('header').fadeIn('slow');
                $('header').css('display', 'flex');
                $('.scrollArrow').css('display', 'block');
                $('section').css('display', 'flex');
                $('html, body').css({
                    overflow: 'auto',
                    height: 'auto'
                });
            }, 500);
        });
    } else {
        $('.Typewriter__wrapper').text("Hi. I'm Arjun");
        $('#sidebar').css('display','block');
        $('header').css('display', 'flex');
        $('.scrollArrow').css('display', 'block');
        $('section').css('display', 'flex');
        $('html, body').css({
            overflow: 'auto',
            height: 'auto'
        });
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

    const contactForm = $('#contact-form')[0];

    $('#contact-form').submit((e) => {
        e.preventDefault();
        $('#submitButton').css('display', 'none');
        $('#loader').css('display', 'inline-block');
        emailjs.sendForm('service_z02i00s', 'template_kch4bv6', contactForm)
        .then(() => {
            $('#successOverlay').css('display', 'flex');
        }, () => {
            $('#failureOverlay').css('display', 'flex');
        }).finally(() => {
            $('#contact-form').css('display', 'none');
            $('#backButton').css('display', 'inline');
            $('#loader').css('display', 'none');
        });
    });

    $('#backButton').click(() => {
        $('#contact-form').css('display', 'block');
        $('#submitButton').css('display', 'block');
        $('#successOverlay').css('display', 'none');
        $('#failureOverlay').css('display', 'none');
        $('#backButton').css('display', 'none');
        $('#contact-form').trigger('reset');
    });

})

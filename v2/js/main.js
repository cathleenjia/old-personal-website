
$('.DOC-index--item').click(function (e) {
    e.preventDefault();

    var id = $(this).attr('id');
    var scrollTo = $(id).offset().top;

    $('html,body').animate({
        'scrollTop': scrollTo
    }, 500);
});

$(document).scroll(function () {
    highlightSection();
});

function highlightSection() {
    // Where's the scroll at?
    var currentPosition = $(this).scrollTop();

    // Remove highlights from all
    $('.DOC-index--item').removeClass('active');

    // Loop over each section
    $('#DOC--content .section').each(function () {
        // Calculate the start and end position of the section
        var sectionStart = $(this).offset().top;
        var sectionEnd = sectionStart + $(this).height();

        // If the current scroll lies between the start and the end of this section
        if (currentPosition >= sectionStart  && currentPosition < sectionEnd) {
            // Highlight the corresponding anchors
            $('div[id=#' + $(this).attr('id') + ']').addClass('active');
        }
    });
};

highlightSection();



if (document.querySelector('.js-scroll-to-portfolio') != null) {
  document.querySelector('.js-scroll-to-portfolio').addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector('.item1').scrollIntoView({ behavior: 'smooth' });
  });
}


function openNav() {
    document.getElementById("slide-index--container").style.width = "280px";
    document.getElementById("DOC-index--container").style.marginLeft = "280px";
}

function closeNav() {
    document.getElementById("slide-index--container").style.width = "0px";
    document.getElementById("DOC-index--container").style.marginLeft = "0px";
}

var addclass = 'index--highlight';

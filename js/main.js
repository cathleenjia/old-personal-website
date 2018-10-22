// $(document).scroll(function () {
//     changeBackgroundColor();
// });

$(document).ready(function(){
    let curr_mode = sessionStorage.getItem("mode");
    if (curr_mode && curr_mode == "light") {
      $('body').removeClass('dark');
      $('body').addClass('light');
      $('.main').removeClass('dark');
      $('.main').addClass('light');
      $('nav').removeClass('dark');
      $('nav').addClass('light');
      $('.light').css({transition: '0s'});
      $('.main-transition').css({transition: '0s'});
      $('.dark-mode svg path').css({fill:"#4a4b4c"});
      $('.hambuger-bar').css('background-color', '#4a4b4c');

    }


    navSlideDown();
    mainSlideUp();
    projectSlideUp();
  });

function showSideNav() {
  // console.log("hello");
  $('.name').addClass('show');
  $('.name').removeClass('hidden');
  $("svg.slidein").attr("class", "slideout");
}

function hideSideNav() {
  // console.log("hello");
  $('.name').removeClass('show');
  $('.name').addClass('hidden');
  $("svg.slideout").attr("class", "slidein");
}

function navSlideDown() {
  $('nav').addClass('nav-show');
}

function mainSlideUp() {
  $('.main').addClass('main-transition');
}

function projectSlideUp() {
  $('.project-content').addClass('project-transition');
}

$("#name1").click(function() {
    $('html,body').animate({
        scrollTop: $("#1").offset().top -60},
        'slow');
    setTimeout(function(){
      $('.active').removeClass('active');
      $('#name1').addClass('active');
      $('#line1').css({stroke: '#0073ff'});
    }, 700);
});

$("#name2").click(function() {
    $('html,body').animate({
        scrollTop: $("#2").offset().top - 60},
        'slow');
    setTimeout(function(){
      $('.active').removeClass('active');
      $('#name2').addClass('active');
      $('#line2').css({stroke: '#0073ff'});
    }, 700);
});

$("#name3").click(function() {
    $('html,body').animate({
        scrollTop: $("#3").offset().top - 60},
        'slow');
    setTimeout(function(){
      $('.active').removeClass('active');
      $('#name3').addClass('active');
      $('#line3').css({stroke: '#0073ff'});
    }, 700);
});

$("#name4").click(function() {
    $('html,body').animate({
        scrollTop: $("#4").offset().top - 60},
        'slow');
    setTimeout(function(){
      $('.active').removeClass('active');
      $('#name4').addClass('active');
      $('#line4').css({stroke: '#0073ff'});
    }, 700);
});

$("#name5").click(function() {
    $('html,body').animate({
        scrollTop: $("#5").offset().top - 60},
        'slow');
    setTimeout(function(){
      $('.active').removeClass('active');
      $('#name5').addClass('active');
      $('#line5').css({stroke: '#0073ff'});
    }, 700);
});

$("#name6").click(function() {
    $('html,body').animate({
        scrollTop: $("#6").offset().top - 60},
        'slow');
    setTimeout(function(){
      $('.active').removeClass('active');
      $('#name6').addClass('active');
      $('#line6').css({stroke: '#0073ff'});
    }, 700);
});

$("#name7").click(function() {
    $('html,body').animate({
        scrollTop: $("#7").offset().top - 60},
        'slow');
    setTimeout(function(){
      $('.active').removeClass('active');
      $('#name7').addClass('active');
      $('#line7').css({stroke: '#0073ff'});
    }, 700);
});

$("#name8").click(function() {
    $('html,body').animate({
        scrollTop: $("#8").offset().top - 60},
        'slow');
    setTimeout(function(){
      $('.active').removeClass('active');
      $('#name8').addClass('active');
      $('#line8').css({stroke: '#0073ff'});
    }, 700);
});

$("#name9").click(function() {
    $('html,body').animate({
        scrollTop: $("#9").offset().top - 60},
        'slow');
    setTimeout(function(){
      $('.active').removeClass('active');
      $('#name9').addClass('active');
      $('#line9').css({stroke: '#0073ff'});
    }, 700);
});

$("#name10").click(function() {
    $('html,body').animate({
        scrollTop: $("#10").offset().top - 60},
        'slow');
    setTimeout(function(){
      $('.active').removeClass('active');
      $('#name10').addClass('active');
      $('#line10').css({stroke: '#0073ff'});
    }, 700);
});

$("#name11").click(function() {
    $('html,body').animate({
        scrollTop: $("#11").offset().top - 60},
        'slow');
    setTimeout(function(){
      $('.active').removeClass('active');
      $('#name11').addClass('active');
      $('#line11').css({stroke: '#0073ff'});
    }, 700);
});

function highlightSection() {
    // Where's the scroll at?
    let currentPosition = $(this).scrollTop()+100;

    // Remove highlights from all
    $('.name').removeClass('active');
    if($('body').hasClass('dark')) {
      $('line').css({stroke:'rgb(239, 239, 239)'});
    } else {
      $('line').css({stroke:'#c6cbd1'});
    }


    // Loop over each section
    $('.section').each(function () {
        // Calculate the start and end position of the section
        let sectionStart = $(this).offset().top;
        let sectionEnd = sectionStart + $(this).height();

        // If the current scroll lies between the start and the end of this section
        if (currentPosition >= sectionStart  && currentPosition <= sectionEnd) {
            // Highlight the corresponding anchors
            $('#name' + $(this).attr('id')).addClass('active');
            $('#line' + $(this).attr('id')).css({stroke: '#147eff'});
        }
    });
};

let lastScrollPos = 0;

$(document).scroll(function () {
    highlightSection();

    let currScrollPos = $(this).scrollTop();
    if (currScrollPos > lastScrollPos && $(this).scrollTop() > 300){
      // downscroll code
      $('nav').addClass('nav-hidden');
      $('nav').removeClass('nav-show');
   } else {
      // upscroll code
      $('nav').addClass('nav-show');
      $('nav').removeClass('nav-hidden');
   }
   lastScrollPos = currScrollPos;
});

highlightSection();

$('.switch__label').click(function(){
  if ($('body').hasClass('dark')){
    $('body').removeClass('dark');
    $('body').addClass('light');
    $('.main').removeClass('dark');
    $('.main').addClass('light');
    $('nav').removeClass('dark');
    $('nav').addClass('light');
    $('line').css({stroke:'#c6cbd1'});
    $('.light').css({transition: '0.2s'});
    $('.dark-mode svg path').css({fill:"#4a4b4c"});
    $('.hambuger-bar').css('background-color', '#4a4b4c');
    sessionStorage.setItem('mode', 'light');
  } else {
    $('body').addClass('dark');
    $('body').removeClass('light');
    $('.main').addClass('dark');
    $('.main').removeClass('light');
    $('nav').addClass('dark');
    $('nav').removeClass('light');
    $('line').css({stroke:'rgb(239, 239, 239)'});
    $('.dark').css({transition: '0.2s'});
    $('.hambuger-bar').css('background-color', '#efefef');
    $('.hambuger-bar').css({color: '#efefef'})
    sessionStorage.setItem('mode', 'dark');
  }
});

// $('.nav-header').click(function() {
//   location.href = "index.html";
// });
//
// $('.nav-item #work').click(function() {
//   location.href = "index.html";
// });
//
// $('.nav-item #about').click(function() {
//   location.href = "about.html";
// });

function menuControls(){
  if (!isHidden(document.querySelector('.hamburger-menu'))) {
    document.querySelector('.hamburger-menu').setAttribute('style', 'display:none;');
  } else {
    document.querySelector('.hamburger-menu').setAttribute('style', 'display:block;');
  }
}

function isHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.display === 'none')
}

$('.card-title').onmouseover = function(){
  console.log('hello');
};

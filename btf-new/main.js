function scrollToSpeaker() {
  document.getElementById('speaker-page').scrollIntoView(true);
  window.scrollBy(0, -70);
}

function scrollToAssignments() {
  document.getElementById('assignments-page').scrollIntoView(true);
  window.scrollBy(0, -70);
}

function scrollToAbout() {
  document.getElementById('about-page').scrollIntoView(true);
  window.scrollBy(0, -70);
}

function scrollToStaff() {
  document.getElementById('staff-page').scrollIntoView(true);
  window.scrollBy(0, -70);
}

function scrollToPolicies() {
  document.getElementById('policies-page').scrollIntoView(true);
}

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

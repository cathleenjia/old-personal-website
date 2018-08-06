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

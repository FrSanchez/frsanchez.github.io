var popup = document.getElementsByClassName("popup");
popup[0].addEventListener('click', function(e) {
  if (e.target == '_blank') {
    return true;
  } else {
    window.open(e.target.href, 'popupwindow', 'scrollbars=yes,width=600,height=600');
    e.preventDefault();
    return false;
  }
}, false);

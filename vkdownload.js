var btns_wrap = document.querySelectorAll('.play_btn_wrap');
var btns = document.querySelectorAll('.play_new');

for ( var i = 0; i < btns_wrap.length; i++ ) {
  var a = document.createElement('a');
  a.innerText = 'D';
  a.setAttribute('href', btns[i].parentNode.nextSibling.nextElementSibling.defaultValue);
  a.setAttribute('download', '');
  btns_wrap[i].appendChild(a);
}



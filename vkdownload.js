var btns_wrap = document.querySelectorAll('.play_btn_wrap');
var btns = document.querySelectorAll('.play_new');
var a = document.createElement('a');
a.innerText = 'D';
a.setAttribute('href', btns[0].parentNode.nextSibling.nextElementSibling.defaultValue);
a.setAttribute('download', '');
btns_wrap[0].appendChild(a);
// пока это работает так: заходим в аудиозаписи, жмакаем ф12 и кописастим туда, должно на первую песню дать ссылку, жмакаем, качаем,
// сейчас делаю на все кнопки

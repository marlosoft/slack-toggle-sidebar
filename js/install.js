// noinspection JSUnresolvedVariable
var obj = chrome || browser;
var url = obj.runtime.getURL('/');

var stylesheet = document.getElementById('toggle-sidebar-stylesheet');
if (!stylesheet) {
  stylesheet = document.createElement('style');
  stylesheet.setAttribute('rel', 'stylesheet');
  stylesheet.setAttribute('id', 'toggle-sidebar-stylesheet');
  stylesheet.setAttribute('src', url + 'css/app.css');
  document.head.appendChild(stylesheet);
}

var javascript = document.getElementById('toggle-sidebar-script');
if (!javascript) {
  javascript = document.createElement('script');
  javascript.setAttribute('type', 'text/javascript');
  javascript.setAttribute('id', 'toggle-sidebar-script');
  javascript.setAttribute('crossorigin', 'anonymous');
  javascript.setAttribute('src', url + 'js/app.js');
  document.body.appendChild(javascript);
}

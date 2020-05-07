// noinspection JSUnresolvedVariable
let obj = chrome || browser;
let stylesheet = document.getElementById('toggle-sidebar-stylesheet');

if (stylesheet === undefined || stylesheet === null) {
  stylesheet = document.createElement('link');
  stylesheet.setAttribute('rel', 'stylesheet');
  stylesheet.setAttribute('id', 'toggle-sidebar-stylesheet');
  stylesheet.setAttribute('href', obj.runtime.getURL('css/app.css'));
  document.head.appendChild(stylesheet);
}

const Sidebar = {
  KEY: '__toggle_sidebar',
  isHidden: () => {
    return window.localStorage.getItem(Sidebar.KEY) === '1';
  },
  apply: () => {
    const workspace = document.querySelector('.p-workspace');
    if (workspace) {
      const classList = workspace.classList;
      Sidebar.isHidden() ? classList.add('no-sidebar') : classList.remove('no-sidebar');
    }
  },
  toggle: () => {
    window.localStorage.setItem(Sidebar.KEY, Sidebar.isHidden() ? '0' : '1');
    Sidebar.apply();
  }
};

const appLoading = setInterval(() => {
  const topNav = document.querySelector('.p-client_desktop--ia-top-nav');
  if (topNav) {
    clearInterval(appLoading);
    Sidebar.apply();
  }
}, 500);

obj.runtime.onMessage.addListener((data, sender) => {
  if (data.sidebar === 'toggle') {
    Sidebar.toggle();
  }
});

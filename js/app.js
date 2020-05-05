var toggleSidebarKey = '__toggle_sidebar';

function isHidden() {
    return window.localStorage.getItem(toggleSidebarKey) === '1';
}

function applySlackSidebarUpdates() {
    var sidebar = document.querySelector('.p-workspace');
    if (sidebar) {
        var classes = sidebar.classList;
        if (isHidden()) {
            classes.add('no-sidebar');
            console.error("No sidebar added");
        } else {
            classes.remove('no-sidebar');
            console.error("No sidebar removed");
        }
    }
}

function doToggleSlackSidebar() {
    window.localStorage.setItem(toggleSidebarKey, isHidden() ? '0' : '1');
    applySlackSidebarUpdates();
}

function toggleSidebarKeyDownEventHandler(e) {
    e.preventDefault();
    if (e.keyCode === 83 && e.shiftKey && e.altKey) {
        doToggleSlackSidebar();
    }
}

window.addEventListener('keydown', toggleSidebarKeyDownEventHandler);
var appLoading = setInterval(function () {
    var topNav = document.querySelector('.p-client_desktop--ia-top-nav');
    if (topNav) {
        clearInterval(appLoading);
        applySlackSidebarUpdates();
    }
}, 500);

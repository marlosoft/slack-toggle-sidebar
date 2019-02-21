(function () {

    function toggleSlackSidebar() {
        var key = '__toggle_sidebar';

        function isHidden() {
            var status = window.localStorage.getItem(key);

            //noinspection EqualityComparisonWithCoercionJS
            return status == "1"
        }

        function reloadPageLayout() {
            var sidebar = document.getElementsByClassName('client_channels_list_container')[0];
            if (sidebar === undefined) return;
            sidebar.style.marginLeft = isHidden() ? '0px' : '-220px';
        }

        function showOrHideSidebar() {
            window.localStorage.setItem(key, isHidden() ? 0 : 1);
            reloadPageLayout();
        }

        function keyDownEventHandler(e) {
            var isMac = navigator.platform.indexOf('Mac');
            if (e.keyCode === 83 && (isMac < 0 ? e.ctrlKey : e.metaKey)) {
                e.preventDefault();
                showOrHideSidebar();
            }
        }

        document.addEventListener("keydown", keyDownEventHandler, false);
        reloadPageLayout();
    }

    var style = document.createElement('style');
    style.type = 'text/css';
    style.innerText = '.client_channels_list_container { display: auto; transition: margin 250ms cubic-bezier(.2,.8,.5,1),top 0s linear 0s,left 250ms ease-in-out; }';
    document.body.appendChild(style);

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = '(' + toggleSlackSidebar.toString() + ')();';
    document.body.appendChild(script);
})();

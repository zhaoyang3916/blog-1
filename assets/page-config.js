window.$docsify = {
    loadSidebar: true,
    alias: {
        '/.*/_sidebar.md': '/_sidebar.md',
        '/.*/_navbar.md': '/_navbar.md'
    },
    maxLevel: 4,
    auto2top: true,
    themeColor: '#9B30FF',
    plugins: [
        function (hook, vm) {
            hook.doneEach(function () {
                // 每次路由切换时数据全部加载完成后调用，没有参数。
                (function initSidebarClass() {
                    var $targetA = $('.sidebar-nav ul').parent().children('a');
                    $targetA.addClass('folder').parent().addClass('folder-wrapper');
                })();
            })
        }
    ]
}
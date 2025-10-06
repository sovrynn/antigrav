var darkMode = false;
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode = true;
}

if (localStorage.getItem('theme') === 'dark') {
    darkMode = true;
} else if (localStorage.getItem('theme') === 'light') {
    darkMode = false;
}

if (darkMode) {
    document.documentElement.classList.toggle('dark');
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('mod-toggle').addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        localStorage.setItem('theme', document.documentElement.classList.contains('dark') ? 'dark' : 'light');

        Ya.Context.AdvManager.getBlocks().forEach(function (item) {
            if ($('#' + item.renderTo).length > 0) {
                Ya.Context.AdvManager.destroy({
                    blockId: item.blockId
                });
                Ya.Context.AdvManager.renderWidget({
                    renderTo: item.renderTo,
                    blockId: item.blockId,
                    darkTheme: document.documentElement.classList.contains('dark')
                })
            }

        })
    });

});
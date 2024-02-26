document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');

    function showContent(contentId) {
        const selectedArticle = document.getElementById(contentId);
        if (selectedArticle) {
            selectedArticle.style.display = 'block';
        }
    }

    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const contentId = this.getAttribute('data-contentid');
            showContent(contentId);
        });
    });
});

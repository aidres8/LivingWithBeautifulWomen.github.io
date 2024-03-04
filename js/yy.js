document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('.sidebar-link');    //
    const txtContents  = document.querySelectorAll('.txt');
    const defaultContent = document.getElementById('content0');
    const txtShow  = document.querySelectorAll('.content_txt');

    function showDefaultContent() { 
        defaultContent.style.display = 'block'; }
    showDefaultContent();

    sidebarLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const contentId = this.getAttribute('data-book');
            const contents = document.querySelectorAll('.content');

            defaultContent.style.display = 'none';

            txtShow.forEach(function(element) {
                element.style.display = 'none';
            });

            contents.forEach(function (content) {
                content.classList.remove('active');
            });

            const firstLineContent = document.getElementById(contentId).querySelector('h6').textContent.trim();
            document.querySelector('.home-section .text').textContent = firstLineContent;

            document.getElementById(contentId).classList.add('active');
        });
    });

    txtContents.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const contentId = this.getAttribute('data-content');
            const contents = document.querySelectorAll('.content_txt');

            // Hide default content
            defaultContent.style.display = 'none';

            // Fetch content from text file
            // fetch('data/' + contentId + '.txt') // Assuming file names are content1.txt, content2.txt, etc.
            fetch('data/' + contentId + '.txt') // Assuming file names are content1.txt, content2.txt, etc.
                .then(response => response.text())
                .then(text => {
                    // Show the clicked content
                    console.log('Clicked link with data-content:', contentId);
                    // const contentElement = document.getElementById(contentId);
                    const contentElement = document.getElementById("chapter_detail");
                    contentElement.innerText = text;
                    contentElement.style.display = 'block';
                    contentElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Scrolls to the top of the content with smooth animation
                })
                .catch(error => console.error('Error fetching content:', error));

            // Hide other contents
            // contents.forEach(function(content) {
            //     if (content.id !== contentId) {
            //         content.style.display = 'none';
            //     }
            // });
        });
    });
});



let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
    arrow[i].addEventListener("click", (e) => {
        let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
        arrowParent.classList.toggle("showMenu");
    });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", () => {
    sidebar.classList.toggle("close");
});

sidebar.classList.remove("close");


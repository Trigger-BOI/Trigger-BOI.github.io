function loadContent(page) {
    fetch('note-pages/' + page)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error('Error loading content:', error));
};

// Load default page
window.onload = () => loadContent('welcome.html');
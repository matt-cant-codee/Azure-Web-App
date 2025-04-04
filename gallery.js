document.getElementById('dark-mode').addEventListener('click', function() {
    document.body.style.backgroundColor = '#333';
    document.body.style.color = '#f0f8ff';
});

document.getElementById('light-mode').addEventListener('click', function() {
    document.body.style.backgroundColor = '#f0f8ff';
    document.body.style.color = '#333';
});

document.addEventListener('DOMContentLoaded', function() {
    fetch('gallery.php?type=gallery')
    .then(response => response.text())
    .then(data => {
        document.getElementById('photo').innerHTML = data;
    })
});
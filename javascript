const toggleButton = document.getElementById('toggleBtn');

toggleButton.addEventListener('click', () => {
    // Check the current background color of the body
    if (document.body.style.backgroundColor === 'black') {
        document.body.style.backgroundColor = 'white';
    } else {
        document.body.style.backgroundColor = 'black';
    }
});

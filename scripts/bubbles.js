const bubblesElement = document.getElementById('bubbles');

bubblesElement.addEventListener('click', () => {
    // Add a class to trigger the animation
    bubblesElement.classList.add('explode-animation');

    // After the animation ends, hide the element
    bubblesElement.addEventListener('animationend', () => {
        bubblesElement.style.display = 'none';
    });
});

const bubbleButton = document.querySelector('.about__click');
const bubble1 = document.querySelector('.bubble1');
const bubble2 = document.querySelector('.bubble2');
const bubble3 = document.querySelector('.bubble3');
const bubble4 = document.querySelector('.bubble4');

let isExpanded = false; 

bubbleButton.addEventListener('click', () => {
  if (isExpanded) {
    bubble1.style.transform = 'translate(0, 0)';
    bubble2.style.transform = 'translate(0, 0)';
    bubble3.style.transform = 'translate(0, 0)';
    bubble4.style.transform = 'translate(0, 0)';
    bubble1.style.opacity = '1';
    bubble2.style.opacity = '1';
    bubble3.style.opacity = '1';
    bubble4.style.opacity = '1';
  } else {
    bubble1.style.transform = 'translate(-300px, -300px)';
    bubble2.style.transform = 'translate(300px, -300px)';
    bubble3.style.transform = 'translate(-300px, 300px)';
    bubble4.style.transform = 'translate(300px, 300px)';
    bubble1.style.opacity = '0';
    bubble2.style.opacity = '0';
    bubble3.style.opacity = '0';
    bubble4.style.opacity = '0';
  }
  isExpanded = !isExpanded;
});
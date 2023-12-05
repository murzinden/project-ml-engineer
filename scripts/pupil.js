document.addEventListener('mousemove', function(event) {
    var pupil = document.querySelector('.footer__images-pupil');
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    
    var pupilX = pupil.getBoundingClientRect().left + pupil.offsetWidth / 2;
    var pupilY = pupil.getBoundingClientRect().top + pupil.offsetHeight / 2;
    
    var angle = Math.atan2(mouseY - pupilY, mouseX - pupilX);
    var radius = 10;
    
    var offsetX = Math.cos(angle) * radius;
    var offsetY = Math.sin(angle) * radius;
    
    pupil.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
  });
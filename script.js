const bodyElement = document.querySelector('body');

bodyElement.addEventListener('mousemove',(event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    const span = document.createElement('span');
    span.style.left = x + 'px';
    span.style.right = y + 'px';
    const size = Math.random()*120;
    span.style.width = size + 'px';
    span.style.height = size + 'px';
    bodyElement.appendChild(span);
    setTimeout(() => {
        span.remove();
    }, 3000);
});
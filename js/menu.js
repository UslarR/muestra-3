const effect = document.querySelector('.effect');
effect.onmousemove = function(e){
    const x = e.pageX - effect.offsetLeft;
    const y = e.pageY - effect.offsetTop;

    effect.style.setProperty('--x', x + 'px');
    effect.style.setProperty('--y', y + 'px');
}
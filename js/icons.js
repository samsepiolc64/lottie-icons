var bm = document.getElementsByClassName('bm');
Array.prototype.forEach.call(bm, icon => {
    var anim = lottie.loadAnimation({
        container: icon,
        path: `icons/${icon.dataset.file}.json`,
        renderer: 'canvas',
        loop: false,
        autoplay: false
    })
    icon.addEventListener('mouseenter', () => {
        anim.setDirection(1);
        anim.play();
    })
    icon.addEventListener('mouseleave', () => {
        anim.setDirection(-1);
        anim.play();
    })
})
function carrousel() {
	let images = document.querySelectorAll('.image');
    let d = 2000;
    let delta = 1000;

    images.forEach(function(img,ind) {
        img.style.zIndex = images.length - ind;
    });
    
    let anim15 = anime.timeline({
        targets: '.imgalt',
        loop: true,
        direction: 'alternate',
        easing: 'linear',
        delay: function(img, ind) {
            if (ind == 0) return delta;
            if (ind == 1) return 2*delta + d;
            if (ind == 2) return 3*delta + 2*d;
            if (ind == 3) return 4*delta + 3*d;
            if (ind == 4) return 5*delta + 4*d;
            if (ind == 5) return 6*delta + 5*d;
            return 3*delta + 6*d;
        }
    });
    anim15.add({
        translateX: [{value: 130, duration: d, easing: 'easeInOutSine'}, 
                     {value: 130, duration: 0, delay: delta}]
    });
}

function monterLegende() {
    document.querySelector('.texte13').style.display='block';
    return anime({
        targets:'.texte13',
        translateX:{value: '0em', delay: 500},
        translateY: '-5em',
        autoplay: false,
        duration: 300,
        easing:'linear',
    }).play;
}
import gsap from 'gsap';

gsap.to('.box', {
    opacity: 1,
    rotation: 360,
    background: '#ff6f61',
    borderRadius: '50%',
    scale: 1.25,
    duration: 3,
    // delay: 0.5,
    // ease: 'power1.inOut',
    ease: 'bounce',
    repeat: -1,
    yoyo: true,
    // repeatDelay: 2,
    // paused: true,
})

//move right and vanish
gsap.to(".box", {
  x: 200,
  opacity: 0,
  duration: 1
});
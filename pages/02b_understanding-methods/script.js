import gsap from 'gsap';

const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
const resume = document.querySelector('.resume');
const restart = document.querySelector('.resume');
const reverse = document.querySelector('.restart');
const repeat = document.querySelector('.repeat');
const kill = document.querySelector('.kill');
const yoyo = document.querySelector('.yoyo');

const animation = gsap.to('.box', {
    opacity: 1,
    rotation: 360,
    borderRadius: '50%',
    scale: 1.25,
    duration: 2
})

play.addEventListener('click', () => {animation.play(true)});

pause.addEventListener('click', () => {animation.pause()});

resume.addEventListener('click', () => {animation.resume()});

restart.addEventListener('click', () => {animation.restart()});

reverse.addEventListener('click', () => {animation.reverse()});

repeat.addEventListener('click', () => {animation.repeat(2)});

kill.addEventListener('click', () => {animation.kill()});

yoyo.addEventListener('click', () => {animation.yoyo(true)});



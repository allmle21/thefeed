const cover = document.querySelector('.cover-content');
let isOpen = false;

cover.addEventListener('click', () => {
    isOpen = !isOpen;
    cover.classList.toggle('open');
});

const musicImage = document.querySelector('.music');
const musicPlayer = document.getElementById('musicPlayer');
musicPlayer.volume = 0.2; 
let isPlaying = false;

musicImage.addEventListener('click', (e) => {
    e.stopPropagation();
    
    if (isPlaying) {
        musicPlayer.pause();
        musicImage.classList.remove('playing');
        isPlaying = false;
    } else {
        musicPlayer.play();
        musicImage.classList.add('playing');
        isPlaying = true;
    }
});

const cameraImage = document.querySelector('.camera');
const cameraSound = document.getElementById('camera');
cameraSound.volume = 1.0; 

cameraImage.addEventListener('click', (e) => {
    e.stopPropagation();
    cameraSound.play();

    setTimeout(() => {
        window.location.href = 'the_feed/thefeed.html';
    }, 1200); 
});
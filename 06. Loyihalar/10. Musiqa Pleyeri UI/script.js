let isPlaying = false;
let progress = 30;

function togglePlay() {
    isPlaying = !isPlaying;
    const disk = document.getElementById('diskCover');
    const playBtn = document.getElementById('playBtn');

    if (isPlaying) {
        disk.classList.add('playing');
        playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    } else {
        disk.classList.remove('playing');
        playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    }
}

function prevTrack() {
    alert("Oldingi trek!");
}

function nextTrack() {
    alert("Keyingi trek!");
}

function seekTrack(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const pct = (clickX / width) * 100;
    document.getElementById('progressBar').style.width = pct + '%';
}
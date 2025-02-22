document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('myAudio');
    var playPauseBtn = document.getElementById('playPauseBtn');
    var volumeControl = document.getElementById('volumeControl');
    // 根据音频的初始状态设置按钮类名
    if (audio.paused) {
        playPauseBtn.classList.add('play');
        playPauseBtn.classList.remove('pause');
    } else {
        playPauseBtn.classList.add('pause');
        playPauseBtn.classList.remove('play');
    }
    playPauseBtn.addEventListener('click', function () {
        if (audio.paused) {
            audio.play();
            playPauseBtn.classList.remove('play');
            playPauseBtn.classList.add('pause');
        } else {
            audio.pause();
            playPauseBtn.classList.remove('pause');
            playPauseBtn.classList.add('play');
        }
    });
    volumeControl.addEventListener('input', function () {
        audio.volume = volumeControl.value;
    });
});
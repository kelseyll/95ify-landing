$(document).ready(function() {

    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'audio.mp3');

    $.get();

    audioElement.addEventListener("load", function() {
        audioElement.play();
    }, true);

    $('.play').click(function() {
        audioElement.play();
    });
});

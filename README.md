# Music-player
a music player with js
https://zarafshan-asghari.github.io/Music-player/
# Music-player
<<<<<<< HEAD

a music player with JavaScript.
what I learned from this project ?
if we have a audio element: const music=document.querySelector('audio')
1- play() methode for example : music.play(), it start playing the audio.
2-pause() methode : music.pause(), it pauses the audio.
3-next is (timeupdate) event in audio element => music.addEventListener("timeupdate", updateProgressBar); when the audio is playing the "timeupdate" event is called and (updateProgressBar) function does something to change the progress bar, (updateProgressBar(event)) this function gets and event on that event we need (duration event and currentTime event) to achive and change the width of progressBar .
to find the width in percentage (%)=>
const totalWidth= (currentTime/duration) \* 100;
=> prgress.style.width=`${totalWidth}%`
4-to achive this in seconds and minutes 0:00 - 2:26
totalMinutes:totalMinutes=>Math.floor(duration / 60)
totalSeconds:totalSeconds=>Math.floor(duration % 60)
and show it in this way:
if (totalSeconds < 10) {
totalSeconds = `0${totalSeconds}`;
}
// to avoid NAN
if (totalSeconds) {
totalTime.textContent = `${totalMinutes}:${totalSeconds}`;
}
=======
a music player with js
https://zarafshan-asghari.github.io/Music-player/
>>>>>>> 72b92065f2e336d695da1ee80a9b478961d2b9b5

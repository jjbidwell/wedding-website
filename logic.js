$(document).ready(function(){

//Autoplay music
    var songs = ['./assets/music/careless.mp3', './assets/music/every-step.mp3', './assets/music/hallelujah.mp3', './assets/music/hobbit.mp3', './assets/music/myheart.mp3'];
    var randomSong = songs[Math.floor(Math.random() * 5)]
    var isPlaying = false;

    $('#autoplay').attr('src', randomSong);
    var audio = document.getElementById('autoplay');
    function playAudio() {
        if (isPlaying === false){
       //audio.play();
        console.log('music');
        isPlaying = true;
        }
    }

    $('*').click(function(){
       playAudio()
    });

//Set interval for broken timer
    var minutes = Number($('#minutes').html());
    var seconds = Number($('#seconds').html());   
    console.log(minutes);
    console.log(seconds);
    //var 
    //setInterval()


  });
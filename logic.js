$(document).ready(function(){

//Autoplay music
    var songs = ['./assets/music/careless.mp3', './assets/music/every-step.mp3', './assets/music/hallelujah.mp3', './assets/music/hobbit.mp3', './assets/music/myheart.mp3'];
    var randomSong = songs[Math.floor(Math.random() * 5)]
    var isPlaying = false;

    $('#autoplay').attr('src', randomSong);
    var audio = document.getElementById('autoplay');
    function playAudio() {
        if (isPlaying === false){
        audio.play();
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

//Broken seconds
    function brokenSeconds(){
        setInterval(function(){
            if(seconds === 1000){
                seconds = 0;
            } else {
                seconds += 1;
                $('#seconds').html(seconds);
            }
        }, 50);
            
    
    }

//Broken minute sub-functions




    var randomNumber = 0; 
    function brokenMinutes(){
        setInterval(function(){
            randomNumber = Math.floor((Math.random()*60) - 61); 
            $('#minutes').html(randomNumber);
                setTimeout(function(){
                    $('#minutes').html(-21);
                }, 200);
        }, 1000);
    }
brokenSeconds();
brokenMinutes();

          /*  setInterval(function(){
                $('#minutes').html(-21);
                console.log('working')
            }, 50); */
  });
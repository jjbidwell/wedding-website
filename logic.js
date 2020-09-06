$(document).ready(function(){

//Critical error message and age verification


$('#yes').on('click', function(){
    $('#age-check').addClass('hide');
    setTimeout(function(){
        alert('CATASTROPHIC ERROR: C/users/bongilla69/directory/2684841/garbage-files/less_than_jake_full_Dicography_torrent/autodownload.exe CAN NOT RUN. MAKE SURE YOUR WINDOWS 95 VERSION IS UP TO DATE AND TRY AGAIN')
    }, 30000);
    
})


//Autoplay music
    var songs = ['','./assets/music/careless.mp3', './assets/music/every-step.mp3', './assets/music/hallelujah.mp3', './assets/music/hobbit.mp3', './assets/music/myheart.mp3', './assets/music/take-my-breath.mp3'];
    var randomSong = songs[Math.floor(Math.random() * 7) + 1]
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
                seconds += 1;
                $('#seconds').html(seconds);
        }, 50);
            
    
    }

//Broken minutes
    var randomNumber = 0; 
    function brokenMinutes(){
        setInterval(function(){
            randomNumber = Math.floor((Math.random()*60) - 61); 
            $('#minutes').html(randomNumber);
                setTimeout(function(){
                    $('#minutes').html(-21);
                }, 150);
        }, 1000);
    }
brokenSeconds();
brokenMinutes();

          /*  setInterval(function(){
                $('#minutes').html(-21);
                console.log('working')
            }, 50); */

            setTimeout(function(){
                $('img').show();
                $('button').show();
                $('#cheetah-run').addClass("hide");
                $('#antelope-eat').addClass("hide");
              }, 1000);


            var cheetahRun = false;
            
            $('#run-btn').click(function(){
                if (cheetahRun === false){
                    $('#cheetah').addClass("hide");
                    $('#cheetah-run').removeClass("hide");
                    $('#cheetah-run').animate({left: '+=77%'}, 2000);
              
                    setTimeout(function(){
                        $('#cheetah-run').addClass('hide');
                        $('#antelope').addClass('hide');
                        $('#antelope-eat').removeClass('hide');
                        $('#run-btn').html('cool!!!')
                        $('#cool').html('cool!!!');
                    }, 2000);
                    cheetahRun = true;
                } else if (cheetahRun === true){
                    $('#cheetah').removeClass("hide");
                    $('#antelope').removeClass('hide');
                    $('#run-btn').html('click to make the cheetah run!!!!')
                    $('#cool').html('');
                    $('#cheetah-run').css({'position': 'relative', 'left': "0"});
                    cheetahRun = false;
                };
            });


             
              var jokes = ['I asked God for a bike, but I know God doesn\'t work that way so I stole a bike and asked for forgiveness.',
            'I hate Russian dolls, they\'re so full of themselves.' ,
            'Throwing acid is wrong, in some people\'s eyes.' ,
            'The first time I got a universal remote control I thought to myself, "This changes everything".' ,
            'Say what you want about deaf people...',
            'I\'ve spent the last four years looking for my ex-girlfriend\'s killer, but no-one will do it.',
            'I refused to believe my road worker father was stealing from his job, but when I got home all the signs were there.',
            'I recently decided to sell my vacuum cleaner as all it was doing was gathering dust.',
            'You can never lose a homing pigeon - if your homing pigeon doesn\'t come back what you\'ve lost is a pigeon.',
            'My girlfriend told me to go out and get something that makes her look sexy... so I got drunk.',
            'Don\'t you hate it when someone answers their own questions\? I do.',
            'As I watched the dog chasing his tail I thought "Dogs are easily amused", then I realized I was watching the dog chasing his tail.',
            'PMS jokes are not funny or appropriate. Period!',
            'Gambling addiction hotlines would do so much better if every fifth caller was a winner.',
            'Where there\'s a will, there\'s a relative.',
            'Hedgehogs eh? Why can\'t they just share the hedge?',
            'Just because nobody complains doesn\'t mean all parachutes are perfect.',
            'To the man on crutches, dressed in camouflage, who stole my wallet - you can hide, but you can\'t run.',
            'Velcro - what a rip-off!',
            'My friend keeps trying to convince me that he\'s a compulsive liar but I don\'t believe him.',
            'It’s always hard to explain puns to kleptomaniacs because they’re always taking things literally.',
            'I\'ve just written a song about tortillas; actually, it’s more of a rap.',
            'I had a neck brace fitted years ago and I\'ve never looked back since.',
            'I woke up this morning and forgot which side the sun rises from, then it dawned on me.',
            'My wife just found out I replaced our bed with a trampoline; she hit the roof.',
            'I like to hold hands at the movies... which always seems to startle strangers.',
            'My wife told me sex is better on holiday... that wasn\'t a very nice postcard to receive.', 'I used to breed rabbits. Then I realized they can handle it themselves.', 'Why are eggs not very much into jokes? Because they could crack up.', 'What do you call the soft tissue between a shark\'s teeth? A slow swimmer.','I went to see the doctor about my short-term memory problems. The first thing the bastard did was made me pay in advance.', 'Losing a wife can be very tough. Some may even say impossible.', 'Ain\'t it funny how the colors red, white, and blue represent freedom until they are flashing behind your car.' ,'I\'ll change my facebook username to NOBODY so that way when people post crappy posts, and I press the like button it will say NOBODY likes this', 'If you are reading this than I would like you to know that I, Joshua Bidwell, did not make up any of these terrible jokes, and felt actual phyisical pain reading through the mountain of garbage that is the jokes in this fucking generator. I hope you\'re enjoying this', 'It\'s so cold outside, I actually saw a gangster pull his pants up.', 'A blind man walks into a bar... and a chair... and a table', 'My life. My as in the guy who made this page, Joshua Bidwell from Victorville California. Often I ask how it came to this. I graduated on the honor roll from a top university and have a teaching credential.'
             ]      
                  var jokeNumber;
              $('#joke-btn').click(function(){
                jokeNumber=Math.floor(Math.random()*38)
               $('#joke').html(jokes[jokeNumber])
              })

              $('#like').on('click', function(){
                $('#like').css('background-color', '#728c13');
                $('#broken-tag').html('C:/Users/joshb/images/crying-face.jpg');
                $('#like-txt').html('thank u 4 liking!!!!')
              });


  });
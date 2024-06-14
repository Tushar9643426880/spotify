console.log("welcome to my Spotify");

//Initialize the Variables
let songIndex = 0;
let audioElement = new Audio("./music/Let-Me-Love-You(Pagal-World.Com.In).mp3");
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let  gif = document.getElementById('gif');


let songs = [
    { songName: "Let ME Love You", filePath: "./music/Let-Me-Love-You(Pagal-World.Com.In).mp3", coverpath: "covers/Let-Me-Love-You(Pagal-World.Com.In).mp3" },
    // { songName: "Let ME Love You", filePath: "song/1.mp3", coverpath: "covers/1.jpg" },
    // { songName: "Let ME Love You", filePath: "song/1.mp3", coverpath: "covers/1.jpg" },
    // { songName: "Let ME Love You", filePath: "song/1.mp3", coverpath: "covers/1.jpg" },
    // { songName: "Let ME Love You", filePath: "song/1.mp3", coverpath: "covers/1.jpg" },
    // { songName: "Let ME Love You", filePath: "song/1.mp3", coverpath: "covers/1.jpg" },
    // { songName: "Let ME Love You", filePath: "song/1.mp3", coverpath: "covers/1.jpg" },
    // { songName: "Let ME Love You", filePath: "song/1.mp3", coverpath: "covers/1.jpg" },
    // { songName: "Let ME Love You", filePath: "song/1.mp3", coverpath: "covers/1.jpg" },
    // { songName: "Let ME Love You", filePath: "song/1.mp3", coverpath: "covers/1.jpg" },

]

//audioelement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0) {
       audioElement.play();
       masterPlay.classList.remove('fa-circle-play');  
       masterPlay.classList.add('fa-circle-pause');    
       gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');  
        masterPlay.classList.add('fa-circle-play');  
        gif.style.opacity = 0;  
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    // Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)* 100)
    myProgressBar.vaule = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement ;
})

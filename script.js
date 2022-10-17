console.log("Hello welcome to java script")

let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterplay = document.getElementById('masterplay');
let ProgressBar = document.getElementById('ProgressBar');
let opac = document.getElementById('opac');
let mastersongname = document.getElementById('mastersongname')
let mastersong = document.getElementsByClassName('mastersong');



let songs = [
    {SongName:"Glow" , FilePath:"song/1.mp3" , CoverPath:"cover/glow.jpg"},
    {SongName:"carnival" , FilePath:"song/2.mp3" , CoverPath:"cover/carnival.jpg"},
    {SongName:"Heat Waves" , FilePath:"song/3.mp3" , CoverPath:"cover/heat-waves.jpg"},
    {SongName:"Memories" , FilePath:"song/4.mp3" , CoverPath:"cover/memories.jpg"},
    {SongName:"Sunflower" , FilePath:"song/5.mp3" , CoverPath:"cover/sunflower.jpg"},
    {SongName:"Hamari Adhuri Khani" , FilePath:"song/6.mp3" , CoverPath:"cover/Hamari adhuri kahani.jpg"},
]


masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime <= 0){
        audioElement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        opac.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        opac.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    ProgressBar.value = progress;
})

ProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = ProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songselect')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songselect')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `song/${songIndex}.mp3`;
        // mastersongname.innerText = songs[songIndex].SongName;
        audioElement.currentTime = 0;
        audioElement.play();
        opac.style.opacity = 1;
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex >= 6){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    // mastersongname.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex <= 1){
        songIndex = 6;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    // mastersongname.innerText = songs[songIndex].SongName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
let songIndex = 0;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let clipper=document.getElementById('trimmer');
// let masterSongName = document.getElementById('masterSongName');
// let songItems = Array.from(document.getElementsByClassName('songItem'));

noUiSlider.create(slider, {
    start: [0,100],
    connect:true,
    range: {
        min: 0,
        max: 100,
    }
    
});
let leftHandle=document.querySelector('.noUi-origin:nth-child(odd)');
let rightHandle=document.querySelector('.noUi-origin:nth-child(even)');



// let songs=[
//     {
//         songName: "Aisay Kaisay", filePath:"1.mp3"
//     },
//     {
//         songName:"Starboy",filepath:"2.mp3"
//     },
//     {
//         songName:"stronger",filepath:"3.mp3"
//     },

// ]


masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// let progress=0;
audioElement.addEventListener('timeupdate', ()=>{ 

    // Update Seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    // console.log(progress)
    slider.noUiSlider.set([progress, null]);
});

slider.noUiSlider.on('change.one', ()=>{
    let arr=slider.noUiSlider.get();
    let first=arr[0];
    // console.log(first);
    audioElement.currentTime =  first * audioElement.duration/100;
});
// let right=100;
// rightHandle.addEventListener('change', ()=>{
//     let ar=slider.noUiSlider.get();
//     right=ar[1];
//     // let right=slider.noUiSlider.get()[0];
//     // audioElement.currentTime =  first * audioElement.duration/100;
// })
// console.log(right);

// const MP3Cutter = require('mp3-cutter');

// // import MP3Cutter from 'mp3-cutter';
// clipper.addEventListener('click', ()=>{
//     console.log(left);
//     console.log(right);
//     MP3Cutter.cut({
//         src: audioElement,
//         target: 'target1.mp3',
//         start: progress,
//         end: right 
//     });
    
// })


// MP3Cutter.cut({
//     src: audioElement,
//     target: 'target1.mp3',
//     start: left,
//     end: right 
// });















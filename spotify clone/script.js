



let logosection = document.querySelector("#logo-section")
let playbtn = document.querySelector(".fa-play")
let nextSongBtn = document.querySelector("#nextPlayBtn")
let priyousSongBtn = document.querySelector("#priyousSongBtn")
let rangeInput = document.querySelector("#rangeInput")
let buttonbar = document.querySelector(".fa-backward")
let playsong = document.querySelector("#playsong")
let mysongname = document.querySelector("#mysongname")
let imgSlider = document.querySelector("#imgSlider")
let songDisplay = document.querySelector(".songDisplay")
// filters buttons 
let panjabiFilter = document.querySelector("#panjabi")
let songNum = 0;
let songs = [
    { songCatagery: "bollywood", name: "Make Some Noise ", path: "/songs/1.mp3", cover: "/images/1.jpg" },
    { songCatagery: "bollywood", name: "💕Heart Touching Jukebox ❤️", path: "/songs/2.mp3", cover: "/images/2.jpg" },
    { songCatagery: "haryanvi", name: "2 Numbari ", path: "/songs/3.mp3", cover: "/images/3.jpg" },
    { songCatagery: "panjabi", name: "5 Taara ", path: "/songs/4.mp3", cover: "/images/4.jpg" },
    { songCatagery: "panjabi", name: "Thunder - Imagine Dragons", path: "/songs/5.mp3", cover: "/images/5.jpg" },
    { songCatagery: "panjabi", name: "Faded - Alan Walker", path: "/songs/6.mp3", cover: "/images/6.jpg" },
    { songCatagery: "hindi", name: "Cheap Thrills - Sia", path: "/songs/7.mp3", cover: "/images/7.jpg" },
    { songCatagery: "panjabi", name: "Closer - The Chainsmokers", path: "/songs/8.mp3", cover: "/images/8.jpg" },
    { songCatagery: "panjabi", name: "Let Me Love You - DJ Snake", path: "/songs/9.mp3", cover: "/images/9.jpg" },
    { songCatagery: "panjabi", name: "Starboy - The Weeknd", path: "/songs/10.mp3", cover: "/images/10.jpg" },
    { songCatagery: "panjabi", name: "3 Peg - Sharry Mann", path: "/songs/11.mp3", cover: "/images/10.jpg" }
];


// filter function 
let filterBtn = document.querySelectorAll(".filter")

filterBtn.forEach((selectList)=>{
    selectList.addEventListener("click",()=>{
     
        let mySelectdSong = filterFunction(selectList.getAttribute("id"))
              for (let song of mySelectdSong){
                clearDisplaySons();
               setTimeout(()=>{songAddingDisplay(song)},1000)
          }
    })


 
    
})



function filterFunction(listName){
let mysongs;
if (listName === "all") {
    mysongs = songs;
} else {
    mysongs = songs.filter((list) => list.songCatagery === listName);
}
return mysongs;
}


function clearDisplaySons(){
    console.log(songDisplay.childNodes)
    songDisplay.childNodes.forEach((delet)=>{
        delet.remove()
    })
}


function songAddingDisplay(songDietles){
   let songDiv = document.createElement("div")
   songDiv.setAttribute("class","songDiv")
   songDiv.innerHTML = `<span class="songSpan">${songDietles.name}</span><img src"${songDietles.cover}" alt="Song Image"> `
  songDisplay.append(songDiv)
}




//  music cantrol bAR 



let audiobar = document.createElement("audio")
audiobar.setAttribute("src", songs[`${songNum}`].path)
mysongname.innerText = songs[`${songNum}`].name
audiobar.setAttribute("controls", "controls")

let icons = document.querySelector(".containor")
buttonbar.after(audiobar)



// next song play button 

nextSongBtn.addEventListener("click", () => {
    next()
})

function next() {
    if (songs.length >= songNum) {
        songNum += 1
    } else {
        songNum = 0
    }


    audiobar.setAttribute("src", songs[`${songNum}`].path)
    audiobar.play()

    mysongname.innerText = songs[`${songNum}`].name
}

// previous song play button 

priyousSongBtn.addEventListener("click", () => {
    if (songs.length <= songNum) {
        songNum -= 1
    } else {
        songNum = 0
    }
    audiobar.setAttribute("src", songs[`${songNum}`].path)
    audiobar.play()
    mysongname.innerText = songs[`${songNum}`].name
})

// keybord cantrols 

window.addEventListener("keydown", (e) => {


    if (e.code === "Space") {


        audiobar.play()


    } else if (e.code === "ArrowRight") {
        if (songs.length >= songNum) {
            songNum += 1
        } else {
            songNum = 0
        }

        audiobar.setAttribute("src", songs[`${songNum}`].path)
        audiobar.play()

        mysongname.innerText = songs[`${songNum}`].name

    } else if (e.code === "ArrowLeft") {
        if (songs.length <= songNum) {
            songNum -= 1
        } else {
            songNum = 0
        }
        audiobar.setAttribute("src", songs[`${songNum}`].path)
        audiobar.play()
        mysongname.innerText = songs[`${songNum}`].name

    } else if (e.code === "Enter") {

        audiobar.pause()
    }

})


audiobar.addEventListener("ended", next);





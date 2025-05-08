




let playbtn = document.querySelector(".fa-play")
let nextSongBtn = document.querySelector("#nextPlayBtn")
let priyousSongBtn = document.querySelector("#priyousSongBtn")
let rangeInput = document.querySelector("#rangeInput")
let buttonbar = document.querySelector(".fa-backward")
let playsong = document.querySelector("#playsong")
let mysongname = document.querySelector("#mysongname")
let songNum = 0;
let songs = [
    { songCatagery: "bollywood",name: "Make Some Noise ", path: "/songs/1.mp3", cover: "/images/1.jpg" },
    { songCatagery: "bollywood",name: "💕Heart Touching Jukebox ❤️", path: "/songs/2.mp3", cover: "/images/2.jpg" },
    { songCatagery: "haryanvi",name: "2 Numbari ", path: "/songs/3.mp3", cover: "/images/3.jpg" },
    { songCatagery: "panjabi",name: "5 Taara ", path: "/songs/4.mp3", cover: "/images/4.jpg" },
    { songCatagery: "panjabi",name: "Thunder - Imagine Dragons", path: "/songs/5.mp3", cover: "/images/5.jpg" },
    { songCatagery: "panjabi",name: "Faded - Alan Walker", path: "/songs/6.mp3", cover: "/images/6.jpg" },
    { songCatagery: "boll",name: "Cheap Thrills - Sia", path: "/songs/7.mp3", cover: "/images/7.jpg" },
    { songCatagery: "panjabi",name: "Closer - The Chainsmokers", path: "/songs/8.mp3", cover: "/images/8.jpg" },
    { songCatagery: "panjabi",name: "Let Me Love You - DJ Snake", path: "/songs/9.mp3", cover: "/images/9.jpg" },
    { songCatagery: "panjabi",name: "Starboy - The Weeknd", path: "/songs/10.mp3", cover: "/images/10.jpg" },
    { songCatagery: "panjabi",name: "3 Peg - Sharry Mann", path: "/songs/11.mp3", cover: "/images/10.jpg" }
];


let logosection = document.querySelector("#logo-section")

//  music cantrol bAR 


 
let audiobar = document.createElement("audio")
audiobar.setAttribute("src", songs[`${songNum}`].path)
mysongname.innerText = songs[`${songNum}`].name
audiobar.setAttribute("controls", "controls")
let icons = document.querySelector(".containor")
buttonbar.after(audiobar)

logosection.addEventListener("click", ()=>{
    filterfun()
})

function filterfun(){
console.log(songs)
songs = songs.filter((bollywood)=> bollywood.songCatagery  === "panjabi" ) 
console.log(songs)
audiobar.setAttribute("src", songs[`${songNum}`].path)
mysongname.innerText = songs[`${songNum}`].name

}






// next song play button 

nextSongBtn.addEventListener("click", () => {
    next()
})

function next(){
    if (songs.length >= songNum) {
        songNum += 1
    } else {
        songNum = 0
    }
    console.log(songNum)
    audiobar.setAttribute("src", songs[`${songNum}`].path)
    audiobar.play()
    console.log(songs[`${songNum}`].name)
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
    console.log(e.code)

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



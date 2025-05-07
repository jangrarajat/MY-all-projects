




let playbtn = document.querySelector(".fa-play")
let nextSongBtn = document.querySelector("#nextPlayBtn")
let priyousSongBtn = document.querySelector("#priyousSongBtn")
let rangeInput = document.querySelector("#rangeInput")
let buttonbar = document.querySelector(".fa-backward")
let playsong = document.querySelector("#playsong")
let mysongname = document.querySelector("#mysongname")
let containor = document.querySelector("#containor")
let minubar = document.querySelector("#minubar")

const songs = [
    { name: "Make Some Noise ", path: "/songs/1.mp3", cover: "/images/1.jpg" },
    { name: "💕Heart Touching Jukebox ❤️", path: "/songs/2.mp3", cover: "/images/2.jpg" },
    { name: "2 Numbari ", path: "/songs/3.mp3", cover: "/images/3.jpg" },
    { name: "5 Taara ", path: "/songs/4.mp3", cover: "/images/4.jpg" },
    { name: "Thunder - Imagine Dragons", path: "/songs/5.mp3", cover: "/images/5.jpg" },
    { name: "Faded - Alan Walker", path: "/songs/6.mp3", cover: "/images/6.jpg" },
    { name: "Cheap Thrills - Sia", path: "/songs/7.mp3", cover: "/images/7.jpg" },
    { name: "Closer - The Chainsmokers", path: "/songs/8.mp3", cover: "/images/8.jpg" },
    { name: "Let Me Love You - DJ Snake", path: "/songs/9.mp3", cover: "/images/9.jpg" },
    { name: "Starboy - The Weeknd", path: "/songs/10.mp3", cover: "/images/10.jpg" },
    { name: "3 Peg - Sharry Mann", path: "/songs/11.mp3", cover: "/images/10.jpg" }
];


document.getElementById("containor").addEventListener("click", (e) => {
    if (e.target.classList.contains("songList")) {
        console.log(e.target.innerText)      
       
        e.target.closest("#containor").remove();
        let containor = document.createElement("div")
        containor.setAttribute("class", "containor")
        containor.innerHTML = `<h2>${e.target.innerText}</h2>
         
         <div id="songList" >
              <img src="/images/1.jpg" alt="song img logo">
            </div>
             <div id="songList" >
              <img src="/images/1.jpg" alt="song img logo">

            </div>

             <div id="songList" >
           <img src="/images/1.jpg" alt="song img logo">
            </div>

             <div id="songList" >
             <img src="/images/1.jpg" alt="song img logo">
            </div>
             <div id="songList" >
            <img src="/images/1.jpg" alt="song img logo">
            </div>
             <div id="songList" >
            <img src="/images/1.jpg" alt="song img logo">
            </div>
             <div id="songList" >
             <img src="/images/1.jpg" alt="song img logo">
            </div>
             <div id="songList" >
             <img src="/images/1.jpg" alt="song img logo">
            </div>
             <div id="songList" >
              <img src="/images/1.jpg" alt="song img logo">
            </div>
             <div id="songList" >
                <img src="/images/1.jpg" alt="song img logo">
            </div>
          
           
        `
       
        minubar.after(containor)
        console.log(containor)


    }
    
});
//  music cantrol bAR 


let songNum = 0;
let audiobar = document.createElement("audio")
audiobar.setAttribute("src", songs[`${songNum}`].path)
mysongname.innerText = songs[`${songNum}`].name
audiobar.setAttribute("controls", "controls")
let icons = document.querySelector(".containor")
buttonbar.after(audiobar)





// next song play button 

nextSongBtn.addEventListener("click", () => {
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
})


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
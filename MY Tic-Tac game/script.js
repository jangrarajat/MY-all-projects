let boxs = document.querySelectorAll(".box")
let resetButtons = document.querySelector(".game-buttons")
let main = document.querySelector("main")
let trun = true
let winnerCondtion = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

//  user game 

boxs.forEach((box) => {
    box.addEventListener("click", () => {
        if (trun) {
            box.innerText = "O"
            trun = false
        }
        else {
            box.innerText = "X"
            trun = true
        }
        box.disabled = true;
        winneroption()
    })
})


// reset game alert 

resetButtons.addEventListener("click", () => {
    let resetAlert = document.createElement("div")
    resetAlert.setAttribute("id", "reset-alert")
    resetAlert.innerHTML = `<span id="reset-msg">Are you sure for reset this game ?</span>
<span id="reset-yes-no"> <button class="reset-msg-btn">No</button><button
    class="reset-msg-btn">Yes</button></span>
`
    main.append(resetAlert)

    
})


document.querySelector("main").addEventListener("click", (e) => {
    if (e.target.classList.contains("reset-msg-btn")) {
        let option = e.target.innerText
        if (option === "Yes") {
            boxs.forEach((box) => {
                box.disabled = false;
                box.innerText = "";
            })
            e.target.closest("div").remove();

        } else {
            e.target.closest("div").remove();

        }

    }
})


// winnig patten 
function winneroption() {

    for (let optins of winnerCondtion) {
        let opt1 = boxs[optins[0]].innerText
        let opt2 = boxs[optins[1]].innerText
        let opt3 = boxs[optins[2]].innerText

        if (opt1 != "" && opt2 != "" && opt3 != "") {
            if (opt1 === opt2 && opt2 === opt3) {
                boxs.forEach((box) => {
                    box.disabled = true;
                })
                let output = document.createElement("div")
                output.setAttribute("class", "winner-output")
                output.innerHTML = `<div class="game-buttons winner-box">
          <span class = winner-span winner-msg>The winner is <span class = "winner-span">${opt1} </span></span>
        </div>
            <button class="game-buttons winner-button">
            New Game
        </button>`
                main.append(output)
                

            } else if (
                       boxs[winnerCondtion[0][0]].innerText  != ""&&
                       boxs[winnerCondtion[0][1]].innerText  != ""&&
                       boxs[winnerCondtion[0][2]].innerText  != ""&&
                       boxs[winnerCondtion[2][0]].innerText != ""&&
                       boxs[winnerCondtion[2][1]].innerText != ""&&
                       boxs[winnerCondtion[2][2]].innerText != ""&&
                       boxs[winnerCondtion[3][0]].innerText != ""&&
                       boxs[winnerCondtion[3][1]].innerText != ""&&
                       boxs[winnerCondtion[3][2]].innerText != ""&&
                       boxs[winnerCondtion[4][0]].innerText != ""&&
                       boxs[winnerCondtion[4][1]].innerText != ""&&
                       boxs[winnerCondtion[4][2]].innerText != ""&&
                       boxs[winnerCondtion[5][0]].innerText != ""&&
                       boxs[winnerCondtion[5][1]].innerText != ""&&
                       boxs[winnerCondtion[5][2]].innerText != ""&&
                       boxs[winnerCondtion[6][0]].innerText != ""&&
                       boxs[winnerCondtion[6][1]].innerText != ""&&
                       boxs[winnerCondtion[6][2]].innerText != ""&&
                       boxs[winnerCondtion[7][0]].innerText != ""&&
                       boxs[winnerCondtion[7][1]].innerText != ""&&
                       boxs[winnerCondtion[7][2]].innerText != ""
                    ) {
                        let gameOver = document.createElement("span")
                        gameOver.innerText = "Game over"
                        main.append(gameOver)
                     console.log("the game is drow")
            }
        }
    }

}

document.querySelector("main").addEventListener("click", (e) => {
    if (e.target.classList.contains("winner-button")) {
        e.target.closest("div").remove();
        boxs.forEach((box) => {
            box.disabled = false;
            box.innerText = "";
        })

    }
})


 



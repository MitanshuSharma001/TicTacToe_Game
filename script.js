let input1 = document.querySelector(".player1input")
let input1value = null;
let input2value = null;
input1.addEventListener("input", function() {
    input1value = input1.value.toUpperCase()
    console.log(input1value.toUpperCase())
})
input1.addEventListener("click", function () {
    input1.placeholder = ""
})
let input2 = document.querySelector(".player2input")
input2.addEventListener("input", function() {
    input2value = input2.value.toUpperCase()
    console.log(input2value)
})
input2.addEventListener("click", function () {
    input2.placeholder = ""
})
window.addEventListener("load", function () {
    input1.value = ""
    input2.value = ""
})
function change() {
    if (input1value == null && input2value == null) {
        input1.value = "PLAYER 1"
        input2.value = "PLAYER 2"
    }
    else if (input1value == null) {
        input1.value = "PLAYER 1"
    }
    else if (input2value == null) {
        input2.value = "PLAYER 2"
    }
}
const startf = async() =>  {
    document.querySelector(".start").addEventListener("click", function() {
        change()
        document.querySelector(".playersinput").style.display = "none"
        document.querySelector(".start").style.display = "none"
        document.querySelector(".players").style.display = "flex"
        document.querySelector(".players .player1").style.display = "flex"
        document.querySelector(".players .player1 .text").innerHTML = `${input1.value.toUpperCase()}`
        document.querySelector(".players .player2").style.display = "flex"
        document.querySelector(".players .player2 .text").innerHTML = `${input2.value.toUpperCase()}`
        document.querySelector(".tictactoe").style.display = "flex"
        setTimeout(() => {
            document.querySelector(".player1").style.backgroundColor= "cyan"
            document.querySelector(".player2").style.backgroundColor= "red"
            document.querySelector(".player1 .player1circle").style.display = "block"
            document.querySelector(".player2 .player2cross").style.display = "block"
            document.querySelector(".player2 .player2cross").style.visibility = "hidden"
        }, 700);
    })
}
const playerchange = ()=>{
    if (document.querySelector(".player1").style.backgroundColor === "red") {
        document.querySelector(".player1").style.backgroundColor= "cyan"
        document.querySelector(".player2").style.backgroundColor= "red"  
        document.querySelector(".player2 .player2cross").style.display = "block"
        document.querySelector(".player2 .player2cross").style.visibility = "hidden"
        document.querySelector(".player1 .player1circle").style.display = "block"
        document.querySelector(".player1 .player1circle").style.visibility = "visible"
        }
        else if (document.querySelector(".player1").style.backgroundColor === "cyan") {
            document.querySelector(".player1").style.backgroundColor= "red"
            document.querySelector(".player2").style.backgroundColor= "cyan"
            document.querySelector(".player1 .player1circle").style.display = "block"
            document.querySelector(".player1 .player1circle").style.visibility = "hidden"
            document.querySelector(".player2 .player2cross").style.display = "block"
            document.querySelector(".player2 .player2cross").style.visibility = "visible"
        }
    }
    let box = [];
    let circle = [];
    let cross = [];
    let cbox = document.querySelectorAll(".cbox")
    let cbox1;
    let cbox2;
    let i;
    let click = new Audio("click.wav")
    let win = new Audio("win.wav")
    let tied = new Audio("tied.wav")
    
    const main = async() =>{
        await startf()
        for (let i=0;i<9; i++) {
            box[i] = document.querySelector(`.box${i+1}`)
            cbox1 = cbox[i].getElementsByTagName("img")[0]
            cbox2 = cbox[i].getElementsByTagName("img")[1]
            circle[i] = box[i].querySelector(".circle")
            cross[i] = box[i].querySelector(".cross")
            
            await box[i].addEventListener("click", myfunction) 
            function myfunction () {
                click.play()
                if (document.querySelector(".player1").style.backgroundColor=== "cyan") {
                    box[i].querySelector(".circle").style.display = "block"    
                }
                else if (document.querySelector(".player2").style.backgroundColor=== "cyan") {
                    box[i].querySelector(".cross").style.display = "block"
                }
                setTimeout(()=>{
                    playerchange()
                }, 100)

                if (circle[i].style.display == "block" || cross[i].style.display == "block") {
                    box[i].removeEventListener("click", myfunction)
                }
                if (((circle[0].style.display == "block" && circle[3].style.display == "block" && circle[6].style.display == "block") ||
                (circle[1].style.display == "block" && circle[4].style.display == "block" && circle[7].style.display == "block") ||
                (circle[2].style.display == "block" && circle[5].style.display == "block" && circle[8].style.display == "block")) ||
                ((circle[0].style.display == "block" && circle[4].style.display == "block" && circle[8].style.display == "block") ||
                (circle[2].style.display == "block" && circle[6].style.display == "block" && circle[4].style.display == "block")) ||
                ((circle[0].style.display == "block" && circle[1].style.display == "block" && circle[2].style.display == "block") ||
                (circle[3].style.display == "block" && circle[4].style.display == "block" && circle[5].style.display == "block") ||
                (circle[6].style.display == "block" && circle[7].style.display == "block" && circle[8].style.display == "block"))) {
                    console.log("jeet gya")
                    setTimeout (()=>{
                        document.querySelector(".players").style.display = "none"
                        document.querySelector(".players .player1").style.display = "none"
                        document.querySelector(".players .player2").style.display = "none"
                        document.querySelector(".tictactoe").style.display = "none"
                        setTimeout(()=>{
                            win.play()
                            document.querySelector(".page .result").style.display = "block"
                            document.querySelector(".page .result").innerHTML = `${input1.value.toUpperCase()} WON!`
                        }, 700)
                    }, 700)
                }
                else if (((cross[0].style.display == "block" && cross[3].style.display == "block" && cross[6].style.display == "block") ||
                    (cross[1].style.display == "block" && cross[4].style.display == "block" && cross[7].style.display == "block") ||
                    (cross[2].style.display == "block" && cross[5].style.display == "block" && cross[8].style.display == "block")) ||
                    ((cross[0].style.display == "block" && cross[4].style.display == "block" && cross[8].style.display == "block") ||
                    (cross[2].style.display == "block" && cross[6].style.display == "block" && cross[4].style.display == "block")) ||
                    ((cross[0].style.display == "block" && cross[1].style.display == "block" && cross[2].style.display == "block") ||
                    (cross[3].style.display == "block" && cross[4].style.display == "block" && cross[5].style.display == "block") ||
                    (cross[6].style.display == "block" && cross[7].style.display == "block" && cross[8].style.display == "block"))) {
                    console.log("jeet gya")
                    setTimeout (()=>{
                        document.querySelector(".players").style.display = "none"
                        document.querySelector(".players .player1").style.display = "none"
                        document.querySelector(".players .player2").style.display = "none"
                        document.querySelector(".tictactoe").style.display = "none"
                        setTimeout(()=>{
                            win.play()
                            document.querySelector(".page .result").style.display = "block"
                            document.querySelector(".page .result").innerHTML = `${input2.value.toUpperCase()} WON!`
                        }, 700)
                    }, 700)
                }
                else if ((circle[0].style.display == "block" || cross[0].style.display == "block") &&
                (circle[1].style.display == "block" || cross[1].style.display == "block") &&
                (circle[2].style.display == "block" || cross[2].style.display == "block") &&
                (circle[3].style.display == "block" || cross[3].style.display == "block") &&
                (circle[4].style.display == "block" || cross[4].style.display == "block") &&
                (circle[5].style.display == "block" || cross[5].style.display == "block") &&
                (circle[6].style.display == "block" || cross[6].style.display == "block") &&
                (circle[7].style.display == "block" || cross[7].style.display == "block") &&
                (circle[8].style.display == "block" || cross[8].style.display == "block"))   {
                    setTimeout (()=>{
                        document.querySelector(".players").style.display = "none"
                        document.querySelector(".players .player1").style.display = "none"
                        document.querySelector(".players .player2").style.display = "none"
                        document.querySelector(".tictactoe").style.display = "none"
                        setTimeout(()=>{
                                    tied.play()
                                    document.querySelector(".page .result").style.display = "block"
                                    document.querySelector(".page .result").innerHTML = "Sorry! The game is Tied"
                                }, 700)
                            }, 700)
                }
                
            }
        }
}
main().catch((error)=>{
    console.log("Error Handled!")
})

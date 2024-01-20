const startf = async() =>  { 
    document.querySelector(".start").addEventListener("click", function() {
        document.querySelector(".start").style.display = "none"
        document.querySelector(".players").style.display = "flex"
        document.querySelector(".players .player1").style.display = "flex"
        document.querySelector(".players .player2").style.display = "flex"
        document.querySelector(".tictactoe").style.display = "flex"
        setTimeout(() => {
            document.querySelector(".player1").style.backgroundColor= "cyan"
            document.querySelector(".player2").style.backgroundColor= "red"
            document.querySelector(".player1 .player1circle").style.display = "block"
        }, 700);
    })
 }
const playerchange = ()=>{
        if (document.querySelector(".player1").style.backgroundColor === "red") {
            document.querySelector(".player1").style.backgroundColor= "cyan"
            document.querySelector(".player2").style.backgroundColor= "red"  
            document.querySelector(".player2 .player2cross").style.display = "none"
            document.querySelector(".player1 .player1circle").style.display = "block"
        }
        else if (document.querySelector(".player1").style.backgroundColor === "cyan") {
            document.querySelector(".player1").style.backgroundColor= "red"
            document.querySelector(".player2").style.backgroundColor= "cyan"
            document.querySelector(".player1 .player1circle").style.display = "none"
            document.querySelector(".player2 .player2cross").style.display = "block"
        }
}
let box = [];
let circle = [];
let cross = [];
let cbox = document.querySelectorAll(".cbox")
let cbox1;
let cbox2;
let i;

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
                            document.querySelector(".page .result").style.display = "block"
                            document.querySelector(".page .result").innerHTML = "Player 1 WON!"
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
                            document.querySelector(".page .result").style.display = "block"
                            document.querySelector(".page .result").innerHTML = "Player 2 WON!"
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
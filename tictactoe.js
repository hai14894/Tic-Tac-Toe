//function that draw the 3x3 grid
    let isXturn = true
    let playerXMoves = []
    let playerOMoves = []
    let winningCombinations = [
        [1,2,3], [4,5,6], [7,8,9], //Horizontal
        [1,4,7], [2,5,8], [3,6,9], //Vertical
        [1,5,9], [3,5,7] //Diagonal
    ]
function drawGrid(){
    let table = document.querySelector("#game")
    let counter = 1
    
    for(let i=0; i<3; i++){
        let row = document.createElement("tr")
        for(let x=0; x<3; x++){
            let col = document.createElement("td")
            col.className = "cell"
            col.id = counter
            counter++
            col.style.borderStyle = "solid"
            row.appendChild(col)
            col.addEventListener("click", (e) =>{

                if(e.target.innerText !== "X" && e.target.innerText !== "O"){
                    e.target.innerText = isXturn ? "X" : "O"
                    if(isXturn){
                        playerXMoves.push(Number(e.target.id))
                    }else{
                        playerOMoves.push(Number(e.target.id))
                    }
                    if(checkWinner()){
                        alert("youwin")
                    }
                    isXturn = !isXturn
                    
                }

            console.log(playerXMoves);
            })
        }
        table.appendChild(row)
    }
    
}
drawGrid()
//create the combinations of a winner


    function checkWinner(){
        const currentPlayerMoves = isXturn ? playerXMoves :playerOMoves
        for(winningCombination of winningCombinations){
            if(
                currentPlayerMoves.includes(winningCombination[0]) && 
                currentPlayerMoves.includes(winningCombination[1]) &&
                currentPlayerMoves.includes(winningCombination[2])
                ){
                    return true
                }
        }
        return false
    }
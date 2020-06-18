//function that draw the 3x3 grid
function drawGrid(){
    let table = document.querySelector("#game")
    let counter = 1
    for(let i=0; i<3; i++){
        let row = document.createElement("tr")

        for(let x=0; x<3; x++){
            let col = document.createElement("td")
            col.innerHTML = counter
            counter++
            row.appendChild(col)
        }
        table.appendChild(row)
    }
}
//create the combinations of a winner
let winners = [
    [1,2,3], [4,5,6], [7,8,9], //Horizontal
    [1,4,7], [2,5,8], [3,6,9], //Vertical
    [1,5,9], [3,5,7] //Diagonal
]
console.log(winners);

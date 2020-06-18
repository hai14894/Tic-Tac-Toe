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
drawGrid()
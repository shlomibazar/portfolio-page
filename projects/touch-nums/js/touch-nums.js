

var num = 16
var numbersToChooseFrom= []
var gBoard =[]
var gCurrNum = 1



for (var i = 0; i < num; i++) {
    numbersToChooseFrom[i]=i+1
}
shuffle(numbersToChooseFrom)





function onLoad() {
    gBoard = createBoard()
    renderBoard(gBoard)
    //console.log(numbersToChooseFrom)
    console.table(gBoard)
}




var a = date.now()
var b = date.now()
var c = b-a 

var elHeader2 = document.querySelector('h2')

function cellClicked(elCell, cellI, cellJ){
    //var tds = document.querySelectorAll(".gmisc_table td");
    //gBoard[cellI][cellJ] = '*'
    
    //elHeader2.innerText = a
    
    console.log('elCell',elCell)
    
    console.log('gCurrNum',gCurrNum)
    temp = +elCell.innerText
    console.log('temp',temp)
    
    if (gCurrNum === 16 ){
        var elHeader = document.querySelector('h1')
        elHeader.innerText = 'you win'
    }
    if(temp === gCurrNum){
        elCell.classList.add(".clicked")
        
        // Update the model
        gBoard[cellI][cellJ] = '*'
        
        // Update the DOM
        elCell.innerText = '*'
        
        gCurrNum++
        
        //gBoard = runGeneration(gBoard);
    }
    renderBoard(gBoard);
    console.table(gBoard);
    
}



function renderBoard(board) {
    //console.table(board)

    var strHTML = ''
    var classStr = 'clicked'
    for(var i = 0; i < board.length; i++){
        strHTML += '\n<tr>\n'
        for(var j = 0; j < board[i].length; j++){
            var dataAttribStr = `data-i="${i}" data-j="${j}"`
            strHTML += `\t<td ${dataAttribStr}
            onclick="cellClicked(this, ${i}, ${j})" 
            >${board[i][j]}</td>\n`
        }
        // strHTML += `\t<td ${dataAttribStr}
        // onclick="cellClicked(this, ${i}, ${j})" 
        // class="${classStr}">${board[i][j]}</td>\n`
        strHTML += '\n</tr>'
        //console.log('strHTML',strHTML)
    }
    var elBoard = document.querySelector('.board')
    elBoard.innerHTML = strHTML
    //console.log(strHTML);
}


// function runGeneration(board) {
    //     var newBoard = copyMat(board)

//     for (var i = 0; i < board.length; i++) {
//         for (var j = 0; j < board[0].length; j++) {
//                 board[i][j] = ''
//             }

        

//     }
//     return newBoard;
// }




function createBoard() {
    var board = []

    for (var i = 0; i < Math.sqrt(num); i++) {
        board.push([])
        for (var j = 0; j < Math.sqrt(num); j++) {
            board[i][j] = numbersToChooseFrom.pop()
        }
    }
    return board;
}


function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
  }
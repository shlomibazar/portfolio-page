



var gQuests = [
    { id: 1, opts: ['Dog Driving', 'Cat Driving'], correctOptIndex: 0, quest: 'what u see?' },
    { id: 2, opts: ['Yes', 'No'], correctOptIndex: 1, quest: 'will he reach?' },
    { id: 4, opts: ['Shiran', 'Shlomi'], correctOptIndex: 0, quest: 'What is my name?' },
    { id: 5, opts: ['5', '2'], correctOptIndex: 0, quest: 'how many animels in pic?' },
    { id: 6, opts: ['Blue', 'Black'], correctOptIndex: 1, quest: 'what the color of his hair?' },
    { id: 7, opts: ['Left', 'Right'], correctOptIndex: 0, quest: 'find the orange chicken?' },
    { id: 8, opts: ['Yes', 'No'], correctOptIndex: 1, quest: 'is it funny?' },
    { id: 9, opts: ['Halloween', 'Christmas '], correctOptIndex: 1, quest: 'what holiday they celebrating?' },
    { id: 10, opts: ['Yes', 'No'], correctOptIndex: 0, quest: 'Do you feel like this in coding academy?' },

]

var gCurrQuestIdx = 0


function StartGame() {
    console.log('hello');
    renderQuest(gCurrQuestIdx)
}

function checkAnswer(num) {

    var currQ = gQuests[gCurrQuestIdx]
    console.log('currQ.correctOptIndex', currQ.correctOptIndex)
    console.log('num', num)
    if (gCurrQuestIdx < 10) {
        if (currQ.correctOptIndex === num) {
            gCurrQuestIdx++
            renderQuest(gCurrQuestIdx)

        }
    }else {
        console.log('you Win')
         gCurrQuestIdx===1
         renderQuest(gCurrQuestIdx)
    }

}

function renderQuest(gCurrQuestIdx) {


    document.getElementById("myImg").src = `img/${gCurrQuestIdx + 1}.jpg`
    var currQ = gQuests[gCurrQuestIdx]
    var elBtns = []
    elBtns = document.querySelectorAll('.container button')

    var elHeader = document.querySelector('h1')
    elHeader.innerText = currQ.quest

    for (var i = 0; i < gQuests.length; i++) {
        var currQ = gQuests[gCurrQuestIdx]
        elBtns[i].innerText = currQ.opts[i]

    }

    //gCurrQuestIdx++
}



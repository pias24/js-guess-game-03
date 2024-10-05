//=======================dom part start=====================
//========player one dom
let player_1 = document.querySelector('.player_1')
let playerOneinput = document.querySelector('.playerOneinput')
let playerOnebutton = document.querySelector('.playerOnebutton')

//========player two dom
let player_2 = document.querySelector('.player_2')
let playerTwoinput = document.querySelector('.playerTwoinput')
let playerTwobutton = document.querySelector('.playerTwobutton')

//=========other dom
let playerName = document.querySelector('.playerName')
let error = document.querySelector('.error')
let winner = document.querySelector('.winner')
let result = document.querySelector('.result')
// let chanceCount = document.querySelector('.chanceCount')
// let chance = 0
//=======================dom part end======================= 
// countCount.innerHTML = chance
playerOnebutton.addEventListener( 'click',()=>{
    if(playerOneinput.value == ''){
         error.innerHTML = 'please enter your value'
    }else{
        if(playerOneinput.value>10){
            error.innerHTML = 'nibo na'
        }else{
            player_1.style = 'display:none'
            error.innerHTML = ''
            player_2.style = 'display:block'
        }
    }
    //;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    playerTwobutton.addEventListener( 'click',()=>{
        if(playerTwoinput == ''){
            error.innerHTML = 'please enter your value'
        }else{
            if(playerOneinput.value>10){
                error.innerHTML = 'abar nibo na'
            }else{
                if(playerOneinput.value == playerTwoinput.value){
                    winner.style = 'display:block'
                    result.innerHTML = 'player 2 win'
                    player_2.style ='display:none'
                    playerName.style = 'none'
                }else{
                    winner.style = 'display:block'
                    result.innerHTML = 'player 1 win'
                    player_2.style ='display:none'
                    playerName.style = 'none' 
                }
            }}
    })
})
//=======================function part start================
//=========player one function

//=======================function part end==================

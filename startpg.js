

document.querySelector("#Playbtn").addEventListener('click', ()=>{
    const  player1 =document.querySelector('.playerss1').value
const  player2 =document.querySelector('.playerss2').value
    if(!player1 || !player2){
        alert("Please give a player name")
    }
    else if(player1 && player2){
        localStorage.setItem('player1', player1)
        localStorage.setItem('player2', player2)
        location.href = 'game.html'
    }
})
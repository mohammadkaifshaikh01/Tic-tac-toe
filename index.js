const box = document.querySelectorAll(".box")
const reset = document.getElementById("reset")
const CurrentPlayer = document.getElementById("currentP")
const winnerName = document.getElementById("winnerName")
let Player1 = "X"
// let Player2 = "O"
let isRunning = true;


function startMatch(){
   isRunning = true
   winnerName.textContent = "";
   Player1 = "X"

   CurrentPlayer.innerHTML = `Current Player : ${Player1}`;

   box.forEach((cell)=>{
      cell.textContent = "";
      cell.addEventListener("click",handleClicking)
   })
}

function handleClicking(elem){
   const cell = elem.target
   if(cell.textContent == ""){
     return cell.textContent = Player1
   }
   
}
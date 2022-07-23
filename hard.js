// Hard Board JS

// Variable declarations
let solution = ["6","9","7","5","3","1","2","8","4","4","8","5","6","7","2","1","3","9","2","1","3","9","4","8","6","7","5","7","6","2","3","5","9","4","1","8","1","5","4","8","2","7","3","9","6","9","3","8","4","1","6","7","5","2","8","7","6","1","9","4","5","2","3","5","2","9","7","6","3","8","4","1","3","4","1","2","8","5","9","6","7"]
let inputArray = []
let submitButton = document.getElementById("submit-button");
let clearButton = document.getElementById("clear-board");
let modal = document.getElementById("modal");
let closeButton = document.getElementsByClassName("close-button")[0];


// functions
function getValue(){
    inputArray = []
    for (let i = 1; i <= 81; i++){
        let inputValue = document.getElementById(`input-${i}`).value
        inputArray.push(inputValue)
        console.log(inputValue) 
    }
    console.log(inputArray)
    return inputArray
}

// Geeks for Geeks: https://www.geeksforgeeks.org/how-to-compare-two-arrays-in-javascript/
// this code allowed me to convert the array into strings so that they could be compared using an equalizer

function checkSolution(){
    let message = document.getElementById("message");
    // let dataArray = getValue()
    
    if (JSON.stringify(solution) == JSON.stringify(inputArray)){
        console.log("you won!")
        message.innerHTML = "You Won!"
        return true
    }else {
        console.log("try again!")
        message.innerHTML = "So Close... Try Again!"
        return false 
        
    }
}


function clearBoard(){
    let userInput = document.getElementsByClassName("userinput")

    for (let i = 0; i < userInput.length; i++){
        if (userInput[i].type == "text"){
            userInput[i].value = ""
        }
    }
}

// buttons functionality

submitButton.addEventListener("click", checkSolution);

clearButton.addEventListener("click", clearBoard);


// modal functionality
// W3 Schools: https://www.w3schools.com/howto/howto_css_modals.asp
// Used this code to help me get the modal to deploy

submitButton.onclick = function() {
  modal.style.display = "block";
}

closeButton.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

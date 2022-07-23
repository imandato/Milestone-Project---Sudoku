// Medium Board JS

// Variable declarations
let solution = ["9","1","5","3","6","4","2","7","8","8","2","7","1","9","5","6","3","4","3","4","6","7","2","8","5","9","1","4","7","3","6","1","2","9","8","5","6","5","9","8","3","7","1","4","2","1","8","2","4","5","9","7","6","3","2","3","1","9","4","6","8","5","7","7","6","4","5","8","1","3","2","9","5","9","8","2","7","3","4","1","6"]
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


let solution = ["5","6","2","8","3","1","9","4","7","4","8","7","9","6","2","3","1","5","9","1","3","4","5","7","6","8","2","1","7","8","2","9","6","4","5","3","3","2","9","5","4","8","7","6","1","6","4","5","7","1","3","2","9","8","8","9","4","3","7","5","1","2","6","7","5","6","1","2","4","8","3","9","2","3","1","6","8","9","5","7","4"]

let inputArray = []

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

    // let dataArray = getValue()
    console.log(JSON.stringify(inputArray))
    console.log(JSON.stringify(solution))
    if (JSON.stringify(solution) == JSON.stringify(inputArray)){
        console.log("you won!")
        return true
    }else {
        console.log("try again!")
        return false 
        
    }
}

function clearBoard(){
    // inputArray = []
    // getValue()
    inputArray = []
    console.log(inputArray)
    console.log("clicked")
    // let userInput = document.getElementsByTagName("input")
    // userInput.value = ""
    let userInput = document.getElementsByClassName("userinput")

    for (let i = 0; i < userInput.length; i++){
        if (userInput[i].type == "text"){
            userInput[i].value = ""
        }
        // console.log(inputValue)
    }
}

let submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", checkSolution);

let clearButton = document.getElementById("clear-board");
clearButton.addEventListener("click", clearBoard);

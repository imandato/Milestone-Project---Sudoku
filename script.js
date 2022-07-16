let solution = [3,8,5,2,6,1,8,4,7]

// let inputArray = []

// function getValue(){
//     // this.value = parseFloat(this.value).toFixed(1);
//     let inputValue = document.getElementById('input-1').value
//     inputArray.push(inputValue)
//     console.log(inputValue)
// }

// function getValue2(){
//     // this.value = parseFloat(this.value).toFixed(1)

//     let inputValue2 = document.getElementById('input-2').value
//     inputArray.push(inputValue2)
//     console.log(inputValue2)
// }

// console.log(inputArray)s

function getValue(){
    let inputArray = []
    for (let i = 1; i <= 9; i++){
        let inputValue = document.getElementById(`input-${i}`).value
        inputArray.push(inputValue)
        console.log(inputValue) 
        // console.log(inputArray)
        // console.log(`input-${i}`)
    }
    console.log(inputArray)
    return inputArray
}



function checkSolution(){
    // let dataArray = getValue()
    let dataArray = [3,8,5,2,6,1,8,4,7]
    console.log(JSON.stringify(dataArray))
    console.log(JSON.stringify(solution))
    if (JSON.stringify(solution) == JSON.stringify(dataArray)){
        console.log("you won!")
        return true
    }else {
        console.log("try again!")
        return false 
        
    }
    // for (let i=0; i<= solution.length; i++){
       
    // }
    
}

let solutionCheck = checkSolution()

console.log(solutionCheck)

// let submitButton = document.getElementById("submit-button");
// submitButton.addEventListener("click", checkSolution());


// let solution = [[385],[261],[847]]


// From Java T Point: https://www.javatpoint.com/javascript-editable-table 
// This code uses arrays & array iterators to create a table that can be edited by the user 

// let table = document.querySelector('table');
// let dataCells = document.querySelectorAll('#table td');
// let rows = document.querySelectorAll('tr');
// rows = Array.prototype.slice.call(rows,1);
// let initialData = {
//     0: [1,2,3,4,5],
//     1: [6,7,8,9,10],
//     2: [11,12,13,14,15]
// };

// function parseTable(){
//     var d = {};
//     Array.prototype.forEach.call(rows, function(row,i){
//         var rowrowCells = row.querySelectorAll('td');
//         return Array.prototype.map.call(rowCells, function(cell,j){
//             if (!d[j]) d[j] = [];
//             d[j].push(parseInt(cell.textContent,10));
//         });
//     });
//     return d;
// }



let inputArray = []

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

// console.log(inputArray)

function getValue(){
    for (let i = 1; i <= 9; i++){
        let inputValue = document.getElementById(`input-${i}`).value
        inputArray.push(inputValue)
        console.log(inputValue) 
        console.log(inputArray)
        console.log(`input-${i}`)
    }
}

console.log(inputArray)
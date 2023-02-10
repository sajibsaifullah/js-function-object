// function functionName (parameter,parameter){
//     function body;
//     return;
// }
// var returnedValue = functionName(parameter values);

function getAverage(assignment1, assignment2, assignment3){
    const total = assignment1 + assignment2 + assignment3;
    const average = total / 3;
    return average;
}

const assignment1Marks = 57;
const assignment2Marks = 54;
const assignment3Marks = 60;

var myAverage = getAverage(assignment1Marks, assignment2Marks, assignment3Marks);
console.log(myAverage);
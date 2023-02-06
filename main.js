
let CountCourse = Number(prompt("Enter the number of your lessons")) 
let sum = 0
let zaribSum = 0
for(let i = 1 ; i <= CountCourse ; i++){
    let points = Number(prompt("what is your Point?"))
    let zarib = Number(prompt("zarib"))
    sum+=points*zarib
    zaribSum +=zarib
}
    let average = sum / zaribSum
    console.log(average);
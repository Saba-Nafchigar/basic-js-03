// switch 
// just one input
let FirstNumber = Number(prompt("Enter First Number"))
let SecondNumber = Number(prompt("Enter Second Number"))
let Operand = prompt(" + , - , * , / ")
switch (Operand){
    case "+" :{
        console.log(FirstNumber + SecondNumber);
        break
    }
    case "-":{
        console.log(FirstNumber - SecondNumber);
        break
    }
    case "*" :{
        console.log(FirstNumber * SecondNumber);
        break
    }
    case "/":{
        console.log(FirstNumber / SecondNumber);
        break
    }
    default:{
        console.log("Something wrong happened!");
    }

}

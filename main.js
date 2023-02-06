
let x = Number(prompt("x")) 
let flag = 0
for (let i = 1 ; i <= x ; i++){
    if(x%i===0){
        flag++
        console.log(i);
    }
}
if(flag===2){
    console.log(`prime - ${x}`);
}else{
    console.log(`not prime - ${x}`);
}

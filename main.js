let x = Number(prompt("x"))
for (i=1 ; i <= x ; i++){
    if(i%2===0 && i%3===0){
        document.write(`<div class="even">${i}</div>`)
    }
    else{
        document.write(`<div class="odd">${i}</div>`)

    }
}

//چاپ اعداد بخشپذیر بر 6



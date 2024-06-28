
let a = 1
let b = 2
let c = 3

let sum1 = a + b
let sum2 = a + c
let sum3 = b + c

if (sum1 > sum2 && sum2 > sum3){
    console.log(`${sum1} en boyuk cemdir`)
}
else if (sum2 > sum1 && sum1 > sum3){
    console.log(`${sum2} en boyuk cemdir`)
}
else{
    console.log(`${sum3} en boyuk cemdir`)
}
 export function factorial(n){
    // To define your error message
    if (n < 0) throw new Error("Factorial is not defined for negative numbers")


    if(n===0 || n===1) return 1;

    let result = 1;
    // defines all iterations from 2 to n
    for(let i=2; i <=n; i++){
        result  *= i;
    }
    return result;
}

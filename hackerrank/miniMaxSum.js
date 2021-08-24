const arr = [1, 3, 5, 7, 9];
function miniMaxSum(arr) {    
    // let arraySize = arr.length;
    // let maxNumber = 0;
    // let miniNumber = arr[0];
    // let sumResult = 0;

    // for (let i = 0 ; i < arraySize ; i++) {
    //     if (arr[i] > maxNumber) {
    //         maxNumber = arr[i];
    //     }
    // }

    // for (let i = 0 ; i < arraySize ; i++) {
    //     if (miniNumber < arr[i]) {
    //         miniNumber = miniNumber;
    //     }
    //     else { miniNumber = arr[i]}
    // }           
    
    // for (let i = 0 ; i < arraySize ; i++) {
    // sumResult = sumResult + arr[i];
    // }

    // let miniSumResult = sumResult - maxNumber;
    // let maxSumResult = sumResult - miniNumber;
    // let answer = `${miniSumResult} ${maxSumResult}`;
    
    // console.log(answer);

    const maxNumber = Math.max(...arr);
    const minNumber = Math.min(...arr);
    let sum = 0;
    
        for (let i = 0 ; i < arr.length ; i++){
            sum = sum + arr[i];
        }
    const maxSum = sum - minNumber;
    const miniSum = sum - maxNumber;
    const answer = `${miniSum} ${maxSum}`
    console.log(answer);
}
miniMaxSum(arr);
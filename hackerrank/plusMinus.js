const arr = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
    const arraySize = arr.length;
    let positiveNumber = 0;
    let negativeNumber = 0;
    let neutral = 0;

    for (let i=0 ; i < arraySize ; i++) {
        if (arr[i] > 0) {
            positiveNumber = positiveNumber + 1;
        }
        else if (arr[i] < 0) {
            negativeNumber = negativeNumber + 1;
        } else { neutral = neutral + 1 }   
    }
    const positiveNumberRatio = positiveNumber / arraySize;
    const negativeNumberRatio = negativeNumber / arraySize;
    const neutralRatio = neutral / arraySize;

    console.log(positiveNumberRatio.toFixed(6));
    console.log(negativeNumberRatio.toFixed(6));
    console.log(neutralRatio.toFixed(6));
}
plusMinus(arr);
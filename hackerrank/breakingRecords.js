const scores = [10,5,20,20,4,5,2,25,1];
function breakingRecords(scores) {  
    
    let minNumber = scores[0];
    let maxNumber = scores[0];
    let maxCounter = 0;
    let minCounter = 0;
    
    for (let i = 1 ; i < scores.length ; i++) {

        if (scores[i] === maxNumber) {
            maxCounter = maxCounter;
        }
        if (scores[i] === minNumber) {
            minCounter = minCounter;
        }
        if (scores[i] > maxNumber) {
            maxNumber = scores[i];
            maxCounter = maxCounter + 1;
        }
        if (scores[i] < minNumber) {
            minNumber = scores[i];
            minCounter = minCounter + 1;
        }
    }
    const breakingRecordsAnswer = [maxCounter,minCounter];
    return breakingRecordsAnswer;
}
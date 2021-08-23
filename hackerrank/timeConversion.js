const s = "12:42:00AM";
function timeConversion(s) {
    const separator = ":";
    const hour = s.substring(0,2);
    const minute = s.substring(3,5);
    const second = s.substring(6,8);
    const sufix = s.substring(8,10);
 
    if (hour === "12" && sufix === "AM") {
        hour = "00";
    }
    else if (hour === "12" && sufix === "PM") {
     hour = "12";
    }
    else if (Number(hour) < 12 && sufix === "PM") {
         hour = (Number(hour) + 12).toString(); 
     }   
     const answer = `${hour+separator+minute+separator+second}`;
     console.log(answer);
     return answer;
 }
 timeConversion(s);
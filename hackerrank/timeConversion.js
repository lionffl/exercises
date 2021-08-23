function timeConversion(s) {
   s = new String(s);
   let separator = ":";
   let hour = `${s[0]+s[1]}`;
   let minute = `${s[3]+s[4]}`;
   let second = `${s[6]+s[7]}`;
   let sufix = `${s[8]+s[9]}`;

   if (hour === "12" && sufix === "AM") {
       hour = "00";
   }
   else if (hour === "12" && sufix === "PM") {
    hour = "12";
   }
   else if (Number(hour) < 12 && sufix === "PM") {
        hour = Number(hour) + 12; 
    }   
    hour = hour.toString();
    console.log(`${hour+separator+minute+separator+second}`);
}
timeConversion(s);
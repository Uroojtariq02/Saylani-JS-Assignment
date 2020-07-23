// Question 1
    // function numPower(a, b)
    // {
    //     var num = 1;
    //     for(var i=0; i<b; i++)
    //     {
    //         num = num * a;
    //     }
    //     console.log(`Power of ${a} raised to ${b} is ${num}`);
    // }

    // numPower(8, 2);


// Question 2
    // function LeapYear(year)
    // {
    //     var check = false;
    //     if(year % 4 === 0)
    //     {
    //         check = true;
    //     }
    //     return check;
    // }
    // var year = 2016;
    // console.log(`${year} is a Leap Year: ${LeapYear(year)}`)


// Question 3
    // function circum(i, j, k)
    // {
    //     var ar = (i + j + k) / 2;
    //     return ar;
    // }
    // function area(a, b, c)
    // {
    //     var S = circum(a, b, c);
    //     var ar = (S * (S-a) * (S-b) * (S-c));
    //     ar = ar * 0.5;
    //     return ar;
    // }
    // console.log("Area of Circle is: ", area(4, 5, 6));


// Question 4
    // function percentage(a, b, c)
    // {
    //     var percent = (a + b + c) / 300;
    //     return percent * 100;
    // }
    // function average(a, b, c)
    // {
    //     var avg = (a + b + c)/3;
    //     return avg;
    // }
    // function main(a, b, c)
    // {
    //     var percent = percentage(a, b, c);
    //     var avg = average(a, b, c);
    //     console.log("Percentage of 3 Subjects is ", percent);
    //     console.log("Average of 3 Subjects is ", avg);
    // }
    // main(34, 34, 65);


// Question 5
    // function ofIndex(word, letter)
    // {
    //     for(var i = 0; i < word.length; i++)
    //     {
    //         if(letter === word[i])
    //         {
    //             return i;
    //         }
    //     }
    //     return null;
    // }
    // var word = "Pakistan";
    // var letter = "k";
    // console.log(`Letter ${letter} in ${word} word is at index ${ofIndex(word, letter)}`);


// Question 6
    // function deleteVowel(vowel, word)
    // {
    //     var wordSplit = word.split("");
    //     var newArr = [];
    //     for(var i = 0; i < wordSplit.length; i++)
    //     {
    //         if(!vowel.includes(wordSplit[i]))
    //         {
    //             newArr.push(wordSplit[i]);
    //         }
    //     }
    //     return newArr.join(" ");
    // }
    // var word = "I live in Pakistan";
    // word = word.toLowerCase();
    // var vowel = ["a", "e", "i", "o", "u"];
    // console.log(`Before Sentence is: ${word}`);
    // console.log(`After Sentence is: ${deleteVowel(vowel, word)}`);


// Question 7
    // function succession(s){
    //     s = s.toLowerCase();
    //     s = s.split("");
    //     var vowel = ["a", "e", "i", "o", "u"];
    //     var j = 0;
    //     for(var i = 0; i < s.length; i++){
    //         switch(s[i]){
    //             case "a":
    //                 j = i + 1;
    //                 if(vowel.includes(s[j]) && j <= s.length){
    //                     console.log(`<p>${s[i] + s[j]}</p>`);
    //                 }
    //                 break;
    //             case "e":
    //                 j = i + 1;
    //                 if(vowel.includes(s[j]) && j <= s.length){
    //                     console.log(`<p>${s[i] + s[j]}</p>`);
    //                 }
    //                 break;
    //             case "i":
    //                 j = i + 1;
    //                 if(vowel.includes(s[j]) && j <= s.length){
    //                     console.log(`<p>${s[i] + s[j]}</p>`);
    //                 }
    //                 break;
    //             case "o":
    //                 j = i + 1;
    //                 if(vowel.includes(s[j]) && j <= s.length){
    //                     console.log(`<p>${s[i] + s[j]}</p>`);
    //                 }
    //                 break;
    //             case "u":
    //                 j = i + 1;
    //                 if(vowel.includes(s[j]) && j <= s.length){
    //                     console.log(`<p>${s[i] + s[j]}</p>`);
    //                 }
    //                 break;
    //         }
    //     }
    // }
    // succession('Pleases read this application and give me gratuity');


// Question 8
    // function countDecimals(value) 
    // {
    //     if(Math.floor(value) === value) return 0;
    //     return value.toString().split(".")[1].length || 0; 
    // }
    // function decimal_count(num)
    // {
    //     if(countDecimals(num) >= 1){
    //         return num.toFixed(2);
    //     }
    //     return num;
    // }
    // function Commas(x) 
    // {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }
    // function numClean(num)
    // {
    //     return Commas(decimal_count(num));
    // }
    // function meters(km)
    // {
    //     return km * 1000;
    // }
    // function feet(km)
    // {
    //     return km * 3280.84;
    // }
    // function inches(km)
    // {
    //     return km * 39370.1;
    // }
    // function centimeters(km)
    // {
    //     return km * 100000;
    // }
    // function count_distance(City_A, City_B, distKM)
    // {
    //     console.log(`${City_A} to ${City_B}`);
    //     console.log(`In Meters: ${numClean(meters(distKM))} m`);
    //     console.log(`In Feet: ${numClean(feet(distKM))} ft`);
    //     console.log(`In Inches: ${numClean(inches(distKM))} in`);
    //     console.log(`In Centimeters: ${numClean(centimeters(distKM))} cm`);
    // }
    // count_distance("Karachi", "Islamabad", 1434);


// Question 9
    // function over_time_pay(hrs, overHrWork)
    // {
    //     if(hrs > 40)
    //     {   
    //         return `Overtime Pay: ${overHrWork * 12.00}`
    //     }
    //     return `You haven't done work more than 40 hours`;
    // }
    // console.log(over_time_pay(41, 2));


// Question 10
    // function denomination(amount)
    // {
    //     var hundred = parseInt(amount / 100);
    //     var fifty = parseInt((amount % 100) / 50);
    //     var ten = parseInt(((amount % 100) % 50) / 10);
    //     console.log(`You will have ${hundred} hundred notes ${fifty} fifty notes, ${ten} ten notes`);
    // }
    // var amount = +prompt("Enter withdraw amount:");
    // denomination(amount);
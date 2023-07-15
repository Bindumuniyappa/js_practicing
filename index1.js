// function weekDays(){
//     let day=3;
//     switch(day){
//         case 1:
//             console.log("today is monday");
//             break;
//         case 2:
//             console.log("today is tuesday");
//             break;
//         case 3:
//             console.log("today is wednesday");
//             break;
//         case 4:
//             console.log("today is thursday");
//             break;
//         case 5:
//             console.log("today is friday");
//             break;
//         case 6:
//             console.log("today is saturday");
//             break;
//         case 7:
//             console.log("today is sunday");
//             break;            
//     }
// }
// weekDays();

// function PrintEvenNumbers(n){
//     for(i=2;i<=n;i++){
//         if(i%2==0){
//             console.log(i);
//         }
//     }
// }
// PrintEvenNumbers(10)
// Output :  2, 4 , 6,8

// function printOddNumbers(n){
//     for(let i=1;i<=n;i++){
//         if(i%2!=0){
//             console.log(i)
//         }
//     }
// }
// printOddNumbers(5)

// function CheckOddOrNot(){
//     let n=5;
//     if(n%2!=0){
//         console.log("The number "+n+"is odd");
//     }
// }
// CheckOddOrNot();

// function fact(n){
//     if(n<=1){
//         return 1
//     }
//     return n * fact (n-1);
// }
//  const factResult=fact(5);
//  console.log(factResult);

// function patternLeftTri(n){
//     let s="";
//     for(let r=1;r<=n;r++){
//         for(let c=1;c<n-3;c++){
//             s=s+"*";
//         }
//         console.log(s);
//     }
// }
// patternLeftTri(5)

// function patternNumLeftTri(n){
    
//     for(let r=1;r<=n;r++){
//         let s="";
//         for(let c=1;c<r;c++){
//             s=s+c;
//         }
//         console.log(s);
//     }
// }
// patternNumLeftTri(5)

// function patternNumb2LeftTri(n){
    
//     for(let r=1;r<=n;r++){
//         let s="";
//         for(let c=1;c<=r;c++){
//             s=s+r;
//         }
//         console.log(s);
//     }
// }
// patternNumb2LeftTri(5)


// function PatternProblem(n){
//     for(let r=1;r<=n;r++){
//         let s="";
//         for(let c=1;c<n;c++){
//             s=s+r;
//         }
//         console.log(s)
//     }
// }
// PatternProblem(5);

// function FindAreaAndPerimeter(){
//     const PI=Math.PI;
//     const radius = parseFloat(prompt("Enter the Radius of Circle:"));

//     let area=PI*Math.pow(radius,2);
//     console.log(area);

//     let perimeter=2*PI*radius;
//     console.log(`The Perimeter is ${perimeter}`);
// }
// FindAreaAndPerimeter();

// function FindFirstNUmOfDigit(){
//     let N=2536;
//     console.log("The first Digit of the number is " +parseInt(N/1000))
// }
// FindFirstNUmOfDigit();

// function getValueOfName(a){
//     switch(true){
//         case (a=="P" || a=="p"):
//             console.log("pebby")
//             break;
//         case (a=="B" || a=="b"):
//             console.log("bindu") 
//             break;
//     }
// }
// getValueOfName("p");

// function getLetter(s){
//     let letter;
//     let slen=s.length;

//     if(slen>=1 && slen<=100){
//         switch(true){
//             case 'aeiou' .includes(s[0]):
//                 letter="A";
//                 break;
//             case 'bcdfg' .includes(s[0]):
//                 letter="B";
//                 break;   
//             case 'hjklm' .includes(s[0]):
//                 letter="C";
//                 break;   
//             case 'npqrstvwxyz' .includes(s[0]):
//                 letter="D";
//                 break;        
//         }
//     }
//     return letter;
// }
//  let getLetterResult=getLetter("bindu");
//  console.log(getLetterResult);

function VowelsAndConsonants(s){
    const vowels='aeiou';
    var consonants="";

    for(let i=1;i<s.length;i++){
        if(vowels.includes(s[i])){
            console.log(s[i]);
        }
        else{
            consonants+=s[i]+'\n';
        }
    }
    console.log(consonants)
}
VowelsAndConsonants("javascriptloops")
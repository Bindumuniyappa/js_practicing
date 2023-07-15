function switchcase(){
    let day=2;
    switch(day){
        case 1:
            console.log("sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
         case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;               
    }
}
switchcase();

function printTable(){
    let x=2;
    for(let i=1;i<=10;i++){
        console.log(x+"*"+i+"="+x*i)
    }
}
printTable();


function printEvenNumber(n){
    
    // let arr=[];
    // let j=0;
    for(let i=2;i<=n;i++){
        if(i%2==0){
            // arr[j]=i;
           console.log(i);
        //    j++;
        }  
    }
    
}
printEvenNumber(10);


function printOddNumbers(){
    let n=10;
    let i=1;
    while(i<=n){
        if(i%2!=0){
            console.log(i);
        }
        i++;
    }
    
}
printOddNumbers();

function clickMe(){
    let btn_btn=document.getElementById("change");
    let changeText=document.getElementById("heloText");
    btn_btn.addEventListener("click",function(){
        changeText.innerText="hello world!!";
        changeText.style.color="red";
        alert("heloooo");
    })
}
clickMe();

function matchingUsernameAndPassword(){
    let submit_btn=document.getElementById("submit");
    let input_username=document.getElementById("username").value;
    let input_password=document.getElementById("password").value;
    submit_btn.addEventListener("click",function(){
        if(input_username===input_password){
            alert("logging in!!");
        }
        else{
            alert("sorry!!username and password is not correct:(")
        }
    })
}
matchingUsernameAndPassword();

function patttern1(n){
    let s="";
    for(let r=1;r<=n;r++){
        for(let c=1;c<n-3;c++){
            s=s+"X";
        }
        console.log(s);
    }
}
patttern1(5);

function patttern2(n){
    
    for(let r=1;r<=n;r++){
        let s="";
        for(let c=1;c<=r;c++){
            s=s+c;
        }
        console.log(s);
    }
}
patttern2(5);

function patttern3(n){
    
    for(let r=1;r<=n;r++){
        let s="";
        for(let c=1;c<=r;c++){
            s=s+r;
        }
        console.log(s);
    }
}
patttern3(5);

function patttern4(n){
    
    for(let r=1;r<=n;r++){
        let s="";
        for(let c=1;c<=n;c++){
            s=s+r;
        }
        console.log(s);
    }
}
patttern4(4);

function firstDigitOfTheNumb(){
    let Numb=4569;
    console.log(parseInt(Numb/1000));
}
firstDigitOfTheNumb();

function lastDigitOfTheNumb(){
    let Numb=45697;
    console.log(Numb%10);
}
lastDigitOfTheNumb();

function DivisibilityCondition(a,b){
    if(a%6==0 && b%9==0)
    console.log("true");
    else
    console.log("false");

}
DivisibilityCondition(7,8);

function voterElgibility(N){
    let check=N>=18?"eligible to vote":"Not eligible to vote";
    return check;
}
console.log(voterElgibility(15));

function getValue(a){
    switch(true){
        case (a=="P" || a=="p"):
            console.log("Prepbytes");
            break;
        case (a=="E" || a=="e"):
            console.log("Elevation");
            break;
        case (a=="B" || a=="b"):
            console.log("Bold");
            break;
        case (a=="I" || a=="i"):
            console.log("Italic");
            break;            
    }
}
getValue("p");

function greaterNumber(a,b,c){
    if(a>b && a>c){
        console.log("a is greater than other two");
    }
    else if(b>a && b>c){
        console.log("b is greater than other two");
    }
    else if(c>a && c>b){
        console.log("c is greater than other two")
    }
    else{
        return(-1);
    }

}
greaterNumber(4,5,6);

function secondSmallestNumb(x,y,z){
    if((x<y && x>z) || (x<z && x>y)){
        console.log(x);
    }
    else if((y<x && y>z) || (y>x && y<z)){
        console.log(y);
    }
    else{
        console.log(z);
    }
}
secondSmallestNumb(4,2,5);

function findTheDigitsInGivenNumber(N){
    let count=0;
    N=Number.parseInt(N);
    if(N>1){
        count++;
    while(N/10>=1){ // 112053
        // console.log(N/10);
        N=N/10;//112053/10
        count++;
    }
    console.log(count);
}
    
}
findTheDigitsInGivenNumber(112053);

function findFivesInTheGivenNumber(N){
    let count=0;
    let p=0;
    while(N>0){
        p=N%10;
        if(p==5){
        count++;
        }
        N=parseInt(N/10);
    }
    console.log(count);

}
findFivesInTheGivenNumber(0);

function findSumOFEvenNumbers(N){
    let sum=0;
    for(let i=1;i<=N;i++){
        if(i%2==0){
            sum=sum+i;
        }
        
    }
    console.log(sum);
    
}
findSumOFEvenNumbers(10);

 function findTheSumOfTheDigits(N){
    let sum=0;
    while(N){
        sum+=N%10;
        N=Math.floor(N/10);
        // console.log(N);
       
    }
    console.log(sum);
}
findTheSumOfTheDigits(1236);

function findTheOddNumbers(N){
    for(let i=1;i<=N;i++){
        if(i%2!=0){
          console.log(i);  
        } 
    }
}
findTheOddNumbers(10);

function countAndAddEvenAndOdd(){
    let countOdd=0,countEven=0;
    let arr=[1,2,3,4,5,6,7,8,9,10]
    let arr2=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            countEven=countEven+arr[i];
        }
        else{
            countOdd=countOdd+arr[i];
        }  
    }
    arr2[0]=countEven;
    arr2[1]=countOdd;
    console.log(arr2);
}
countAndAddEvenAndOdd();

function higherAge(){
    let count=0;
    let arr2=[];
    arr=[11,23,45,21,15,86]
    for(let i=0;i<arr.length;i++){
        if(arr[i]>18){
            arr2[count]=arr[i];
            count++;
        }
    }
    console.log(arr2);
}
higherAge();

function passOrFail(){
    let isPass=true;
    arr=[45,65,85,45,69,12,36];
    for(let i=0;i<arr.length;i++){
        if(arr[i]<32){
            isPass=false;
        }
    }
    if(isPass==true){
        console.log("Pass");
    }
    else{
        console.log("Fail");
    }
}
passOrFail();

function stringPalindrome(){
    let str="nanam";
    let strValues=str.split('');
    let reversedString=strValues.reverse();
    let afterReversed=reversedString.join('');
    if(str==afterReversed){
        console.log("Same");
    }
    else{
        console.log("Not same");
    }
}
stringPalindrome();

function reverseString(){
    let str="2019";
    let newStr="";
    for(let i=str.length-1;i>=0;i--){
        newStr+=str[i];
    }
    console.log(newStr);
}
reverseString();

function replaceString(){
    let newString="";
    let str="hi,I am bindu";
    newString=str.replace("bindu","shree");
    console.log(newString);
}
replaceString();

function armstrongNumber(N){
    let temp=N;
    let sum=0;
    while(N!=0){
        d=N%10;
        cube=d*d*d;
        sum+=cube;
        N=parseInt(N/10);
    }
    if(sum==temp){
        console.log("Armstrong Number");
    }
    else{
        console.log("Not Armstrong Number");
    }
}
armstrongNumber(153);

function findEvenOddUsingSet(){
    let s=new Set();
    let arr=[10,20,30,5,7,10];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            s.add(arr[i]);
        }
    }
    console.log(s);
}
findEvenOddUsingSet();

function findTheRepeatedLetters(){
    let m=new Map();
    let s="ABCCBGCCDGHCB";
    for(let i=0;i<s.length;i++){
        if(m.has(s[i])){
            let value=m.get(s[i]);
            m.set(s[i],value+1);

        }
        else{
            m.set(s[i],1);
        }
    }
    for(let [k,v] of m){
        console.log(k+"-->"+v);
    }
    
}
findTheRepeatedLetters();




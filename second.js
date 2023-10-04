// JavaScript If-else
var a=0;  
if(a>10){  
// document.write("value of a is greater than 10");  
console.log("value of a is greater than 10");
}  
else if(a==0){
    console.log("a==0"); 
    //  document.write("value of a is greater than 10");  
   
}
else{
    console.log("value of a is less than 10");
}
//------------------------------------------------------//

//JavaScript switch statement
var grade='B';  
var result;  
switch(grade){  
case 'A':  
result="A Grade";  
break;  
case 'B':  
result="B Grade";  
break;  
case 'C':  
result="C Grade";  
break;  
default:  
result="No Grade";  
}  
// document.write(result);  
console.log(result);

//------------------------------------------------------//


//JavaScript Loops
//1. for loop
//2. while loop
//3. do-while loop
//4. for-in loop

//1. for loop
for (i=1; i<=5; i++)  
{  
// document.write(i + "<br/>")
console.log(i );  
}  

//2. while loop
var i=11;  
while (i<=15)  
{  
// document.write(i + "<br/>"); 
console.log(i );  
i++;  
}  

//3. do-while loop
var i=21;  
do{  
// document.write(i + "<br/>");  
console.log(i );
i--;  
}while (i<=25);  
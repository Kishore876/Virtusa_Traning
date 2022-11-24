//1.forEach


// THIS IS USED TO ACCESS THE ELEMENT
//(*)=>VALUE.KEYFUN
/*
eg program;
const num=[1,2,3,4,5,6,7,8,9,0];
num.forEach((value,index,array)=>{
console.log("value :"+value+" index : "+index+" Array : "+array)});*/




const num=[1,4,9,16,25,36,49,64,81,100];
let sqrt=num.map((value,array)=>{
    return Math.sqrt("value ; "+value+"array ;"+array)
    
});
console.log(sqrt);

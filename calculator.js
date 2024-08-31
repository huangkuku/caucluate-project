let input = document.getElementById("cal");
let appendIt = (e)=>{
    input.value += e;
}
let clearNum = ()=>{
    input.value = "";
}
let calculate = ()=>{
    try{
        input.value  = eval(input.value);
    }catch(error){
        input.value = 'Error';
        clearNum()
    }
}

/* 
eval("string"+"string") 
    allows you to execute a string of code as if it were actual JavaScript code.
try{} catch(err){}
*/
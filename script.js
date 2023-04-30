//get reference to the celsius and fahrenheit input feilds
const celsius=document.querySelector("#celsius"),
fahrenheit=document.querySelector("#fahrenheit");

//set focus to the celsius input feild when the page loads
window.addEventListener("load",()=> celsius.focus());

//convert celsius to fahrenheit when celsius value changes
celsius.addEventListener("input",()=>{
 fahrenheit.value=((celsius.value *9)/5 +32).toFixed(2);
//clear fahrenheit input when celsius input is empty
if(!celsius.value)fahrenheit.value="";

});
//convert fahrenheit to celsius when celsius value changes
fahrenheit.addEventListener("input",()=>{
    celsius.value=(((celsius.value -32) *5 )/ 9).toFixed(2);
    //clear fahrenheit input when celsius input is empty
    if(!fahrenheit.value)celsius.value="";

});
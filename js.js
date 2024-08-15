function formvalied() {

    var name =document.getElementById("username").value;
    var email =document.getElementById("email").value;
    var phone =document.getElementById("phone").value;
    var error =document.getElementById("error");
   var text="";


    if(  name.length<5         ){

text="place enter the name";
error.innerHTML=text;
return false;


    }
   
else if( email.length<10   && email.indexof("@")== -1    )

    {


        text="place enter the email";
        error.innerHTML=text;
        return false;




}  
else if( phone.length!==11    )

    {


        text="place enter the phone";
        error.innerHTML=text;
        return false;




}  
else{

alert("scssecc");
return true; 

}




    
}

function sum(){
var x=2, y=3;
var z ;
z=x+y;
console.log(z);



}





<script>
    function updateClock() {
      var currentTime = new Date();
      var currentHours = currentTime.getHours();
      var currentMinutes = currentTime.getMinutes();
      var currentSeconds = currentTime.getSeconds();

      // Add leading zero if minutes or seconds are less than 10
      currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
      currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;

      var timeOfDay = (currentHours < 12) ? "AM" : "PM";

      // Convert the hours component to 12-hour format if necessary
      currentHours = (currentHours > 12) ? currentHours - 12 : currentHours;
      currentHours = (currentHours === 0) ? 12 : currentHours;

      var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

      document.getElementById("clock").innerHTML = currentTimeString;
    }

    setInterval(updateClock, 1000);
  </script>
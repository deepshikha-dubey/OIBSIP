var count=0;

var counter=setInterval(timer, 10); //1000 will  run it every 1 second

function timer()
{
  count=count+1;
  if (count >= 85)
  {
     clearInterval(counter);
     //counter ended, do something here
      document.getElementById("countdown").innerHTML=85 ;
      document.getElementById("countdown2").innerHTML=15;
      document.getElementById("countdown3").innerHTML=15 ;
      
     return;
  }

  //Do code for showing the number of seconds here
     document.getElementById("countdown").innerHTML=count ; // watch for spelling
     document.getElementById("countdown2").innerHTML=count ; 
     document.getElementById("countdown3").innerHTML=count ;

}

/*

var count=0;

var counter=setInterval(timer, 10); //1000 will  run it every 1 second

function timer2(){
    count=count+1;
    if(count >= 15){
        clearInterval(counter);
        document.getElementById("countdown2").innerHTML=15;
        return;
    }
    document.getElementById("countdown2").innerHTML = count;
}
*/
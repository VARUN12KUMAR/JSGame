var playing=false;  
var score;
document.getElementById("result").onclick=function() {
  	// body...
  	if(playing==true){
  		location.reload();  

  	}
  	else{
  		playing=true;
  		score=0;
document.getElementById("Scoreid").innerHTML=score; 
document.getElementById("Time").style.display="block";
document.getElementById("result").innerHTML="Reset Game";   
 
 
  	}
  }     
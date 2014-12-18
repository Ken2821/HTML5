
var myCnt = 0;
var myTim = 0;

function myGo(){
//document.write("<p>abc</p>");
  mySelect = document.myForm.myMenu.selectedIndex;
  //document.write(mySelect);
  var $myCnt = document.myForm.myMenu.options[mySelect].value;
  

 myCnt = document.myForm.myMenu.options[mySelect].value;
//document.write("<p>ggg</p>");
  myTim = setInterval ( "myTimer()", 1000 );
};

function myTimer(){
//document.open(); 
//document.write("<p>here</p>");
//document.close();
  myCnt = myCnt - 1;
  document.getElementById( "countdown" ).innerHTML =  "あと " + myCnt + "秒 です。";
  if ( myCnt == 0 ){
    clearInterval( myTim );
    alert("時はきた( ・`ω・´)" );
  };
};

//function window.opener.pauseVideo(){
//	v.pause();

//};

onload = function(){
 var goButton;
    goButton = document.getElementById("goButton");
    goButton.onclick = function(){
	return myGo();
  };
 var closeButton;
    closeButton = document.getElementById("closeButton");
    closeButton.onclick = function(){
	return window.close() ;
    };
   
};


/*onload = function(){
 var closeButton;
    closeButton = document.getElementById("closeButton");
    closeButton.onclick = function(){
	return window.close() ;
    };
   
};*/

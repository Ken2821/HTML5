
myCnt = 0;
myTim = 0;

function myGo(){
  mySelect = document.myForm.myMenu.selectedIndex;
  myCnt = eval ( document.myForm.myMenu.options[mySelect].value );
  myTim = setInterval ( "myTimer()", 1000 );
}

function window.opener.pauseVideo(){
	v.pause();

}


function myTimer(){
  myCnt = myCnt - 1;
  document.getElementById( "countdown" ).innerHTML = "食べ頃まで あと " + myCnt + " 秒 です。";
  if ( myCnt == 0 ){
    clearInterval( myTim );
    alert( "ラーメン食べ頃だよ！！" );
  }

}

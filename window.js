//function win_open(){
//console.log("here");
//subwin = window.open('../../html/index.html', 'ramen', 'width=600,height=500');

//};

onload = function(){
 var addButton;
    addButton = document.getElementById("addButton");
    addButton.onclick = function(){
	 return window.open('../../html/ramen.html', 'ramen', 'width=600,height=500');
    };
   
};

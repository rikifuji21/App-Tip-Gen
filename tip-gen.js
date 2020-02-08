// 15 - 20% tip, average is 18-19%

<<<<<<< HEAD


/*function calctip(){
var t = document.getElementsByName(x)
  tip = t * p
  document.getElementById('tip').innerHTML =
}*/



function realnumx() {
	var x = document.getElementsByTagName('x');
    Math.round(100 * x) / 100; //nearest 100th
    document.getElementById('x').innerHTML = x;
    var t = setTimeout(realnumx,500);
}

function realnumy(){
	var y = document.getElementsByTagName('y');
    Math.round(100 * y) / 100; //nearest 100th
    document.getElementById('y').innerHTML = y;
    var m = setTimeout(realnumy,500);
}
=======
function calctip(us){
  us * ;
}

//location.replace('url');
>>>>>>> ce767c8aa12a81a9a44e027714476bf4da5e7fed

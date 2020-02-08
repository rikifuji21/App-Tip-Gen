// 15 - 20% tip, average is 18-19%



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
window.onload = function(){

  var xWert = 0;
  var lWert = 0;

  var container = document.getElementById("container");

  var box = document.getElementById("box");

  var t = setInterval(machen, 5);

  function machen(){

    if(xWert >= 150){
      clearInterval(t);
    }
    else{
      xWert += 0.5;
      lWert += 2;
      box.style.left = xWert + "px";
      box.style.top = xWert + "px";
      container.style.left = lWert + "px";

    }

  }

};

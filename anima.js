window.onload = function(){

  var xWert = 0;
  var lWert = 0;

  var container = document.getElementById("container");

  var box = document.getElementById("box");

  var t = setInterval(machen, 10);

  function machen(){

    if(xWert >= 150){
      clearInterval(t);
    }
    else{
      xWert += 1;
      lWert += 4;
      box.style.left = xWert + "px";
      box.style.top = xWert + "px";
      container.style.left = lWert + "px";

    }

  }

};

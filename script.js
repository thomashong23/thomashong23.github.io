function createParagraph() {
  let para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button');
// function changeColor() {
//   document.getElementByClass("projimage").style.backgroundColor = "red";
// }
// const projimage = document.querySelectorAll('projimage')
// for (let i = 0; i < projimage.length; i++) {
//   projimage[i].onclick = changeColor;
// }

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', createParagraph);
// }
function changeColor(i) {
  document.getElementByClass(i).style.backgroundColor = 'red';
}
var time = null;
function fontSizeNav() {
  var elem = document.getElementById("unselectedspan");
  var fsize = 20;
  clearInterval(time);
  id = setInterval(frame, 10);
  function frame() {
    if (fsize >= 50) {
      clearInterval(id);
    }
    else {
      fsize++;
      elem.style.fontSize = fsize + 'px';
    }
  }
}
var id = null;
function myMove() {
  var elem = document.getElementById("myAnimation");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';

    }
  }
}

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
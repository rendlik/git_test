const input = document.querySelector('.pha input');
const convert = document.querySelector('.convert');
const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');
const letterBinary = [];
const letters = [];
const canvasWidth = canvas.clientWidth;
const canvasHeight = canvas.clientHeight;
// input.addEventListener('input', e => {
//     (letterDeci.push((e.data).charCodeAt()))
//     console.log(letterDeci)
// })

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

input.addEventListener('keydown', e => {
  if (e.keyCode == 8) {
    letters.splice(letters.length - 1, 1);
  } else {
    letters.push(convertToBinary(e.key));
  }
});

function convertToBinary(key) {
  let decimal = key.charCodeAt();
  const binary = [];
  while (decimal) {
    binary.unshift(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }
  return binary;
}

convert.addEventListener('click', populateCanvas);

function populateCanvas() {
  let len = 0;
  letters.forEach(letter => {
    len += letter.length;
  });
  animate()
}

function animate() {
    c.font = "20px Arial"
  letters.forEach(letter => {
    letter.forEach(num => {
      let counter = 0;
      let alternate = -1;
      while(counter < 100 && alternate != num){
        alternate = getRandomInt(2)
        c.fillText(alternate.toString(), 100, 40);
        counter++
        console.log(counter)
      }
    });
  });
}

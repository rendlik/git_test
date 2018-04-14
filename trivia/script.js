const url = 'https://opentdb.com/api.php?amount=1';
let question = 'How are you?';
let answerCorrect = '';
let answers;
let category = '';
let voice;

const msg = new SpeechSynthesisUtterance();

msg.text = question;
msg.rate = 0.85;

function playText(text) {
  msg.text = text;
  speechSynthesis.speak(msg);
}

speechSynthesis.addEventListener('voiceschanged', function() {
  voice = this.getVoices();
  msg.voice = voice[0];
});

// function play(q){
//   let text = q
//   text = encodeURIComponent(text)
//   console.log(text)
//   let url = "http://translate.google.com/translate_tts?tl=en&q="+ text +"&client=tw-ob"
//   $("audio").attr("src",url).get(0).play()
// }
playText('Hi, so you wanna play some trivia.');

axios
  .get(url)
  .then(function(res) {
    answerCorrect = res.data.results[0].correct_answer;
    answers = res.data.results[0].incorrect_answers;
    answers.push(answerCorrect);
    console.log(answers);
    shuffle(answers);
    console.log(answers.join('   ,  ,   '));
    category = res.data.results[0].category;
    question = res.data.results[0].question;
    console.log(res.data.results[0]);
    console.log(question);

    setTimeout(function() {
      console.log(1)
      playText('The category is');
    }, timer('Hi, so you wanna play some trivia.'));

    setTimeout(function() {
      console.log(2)
      playText(category);
    }, timer('Hi, so you wanna play some trivia.') + timer('The category is'));

    setTimeout(function() {
      console.log(3)
      playText(cleanText(question));
    }, timer('Hi, so you wanna play some trivia.') +
      timer(category) +
      timer('The category is'));

    setTimeout(function() {
      console.log(4)
      msg.rate = 0.6;
      options(answers);
      playText(cleanText(answers.join("  , '   '  ,   ")));
      playText(cleanText(answers.join("  , '   '  ,   ")));
      
    }, timer('Hi, so you wanna play some trivia.') +
      timer(category) +
      timer(question) +
      timer('The c'));

    setTimeout(function(){
      console.log("mluv")
      listen()
    },timer('Hi, so you wanna play some trivia.') +
    timer(category) +
    3*timer(question) +
    timer('The category is')+
    timer(answers))
  })
  .catch(function() {
    console.log('err');
  });

function listen() {
  window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  recognition.interimResults = true;
  recognition.lang = 'en-US';

  recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
      .map(result => result[0])
      .map(result => result.transcript)
      //.join('');

    console.log(transcript)
  });

  recognition.addEventListener('end', recognition.start);

  recognition.start();
}

function options(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = String.fromCharCode(65 + i) + ':  ' + arr[i];
  }
  return arr;
}

function cleanText(text) {
  return text.replace(/&#(\d{0,4});/g, function(fullStr, str) {
    return String.fromCharCode(str);
  });
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function timer(text) {
  return text.length * 100 + 200;
}

timer('Hi, so you wanna play some trivia.');

function sleep(miliseconds) {
  var currentTime = new Date().getTime();

  while (currentTime + miliseconds >= new Date().getTime()) {}
}

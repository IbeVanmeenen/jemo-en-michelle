import { playClick, playFail, playSuccess } from './sound';

let btns;
let givenCode = '';
let stone;
let directions;

const nemoCode = '37254';
const keyCode = '15409';

const setMessage = msg => {
  let message = '';

  directions.innerHTML = '';
};

const checkCode = () => {
  if (nemoCode === givenCode) {
    playSuccess();
    stone.classList.add('stone--success');
    setMessage(
      'The end is the beginning. K sp adkjj kr dzqeyzd. Rq yqt, gud zqjg. Wqpu srt auu vujqc. Gebruik limonade.'
    );
  } else if (keyCode === givenCode) {
    playSuccess();
    stone.classList.add('stone--success');
    setMessage('50.815667, 3.327250');
  } else {
    givenCode = '';

    playFail();
    stone.classList.add('stone--failed');
    window.setTimeout(() => {
      stone.classList.remove('stone--failed');
    }, 3000);
  }
};

const checkCodeLenght = () => {
  if (givenCode.length === 5) {
    checkCode();
  }
};

const setItem = btn => {
  btn.addEventListener(
    'mousedown',
    e => {
      playClick();
    },
    false
  );

  btn.addEventListener(
    'click',
    e => {
      givenCode += btn.dataset.code;
      checkCodeLenght();
    },
    false
  );
};

const code = _ => {
  btns = document.getElementsByClassName('js-code-btn');
  stone = document.getElementById('stone');
  directions = document.getElementById('stone-directions');

  [].forEach.call(btns, btn => {
    setItem(btn);
  });
};

export default code;

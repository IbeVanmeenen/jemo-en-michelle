import { playClick, playFail, playSuccess } from './sound';

let btns;
let givenCode = '';
let stone;
let directions;

const correctCode = '1988488770989422705199103637254';

const setMessage = () => {
  let message = '';

  directions.innerHTML = 'Ga naar WhatsApp en geef daar de code "JEMO_IS_EEN_SCHAAP" door in de Familia de mama groep';
};

const checkCode = () => {
  if (correctCode === givenCode) {
    playSuccess();
    stone.classList.add('stone--success');

    setMessage();
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
  if (givenCode.length === 31) {
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

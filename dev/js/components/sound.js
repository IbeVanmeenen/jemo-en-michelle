let clickSound, failSound, successSound;

const resetSound = soundEl => {
  soundEl.pause();
  soundEl.currentTime = 0;
};

export const playClick = () => {
  if (clickSound) {
    resetSound(clickSound);
    clickSound.play();
  }
};

export const playFail = () => {
  if (failSound) {
    resetSound(failSound);
    failSound.play();
  }
};

export const playSuccess = () => {
  if (successSound) {
    resetSound(successSound);
    successSound.play();
  }
};

const sound = _ => {
  clickSound = document.getElementById('sound--click');
  failSound = document.getElementById('sound--fail');
  successSound = document.getElementById('sound--success');
};

export default sound;

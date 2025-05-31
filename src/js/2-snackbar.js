import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
const delayInputEl = document.querySelector('input[type="number"]');
const fulfilledEl = document.querySelector('input[value="fulfilled"]');
const rejectedEl = document.querySelector('input[value="rejected"]');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const delay = parseInt(delayInputEl.value);
  let state = '';
  if (fulfilledEl.checked) {
    state = 'fulfilled';
  } else if (rejectedEl.checked) {
    state = 'rejected';
  }

  createPromise(delay, state)
    .then(delay => {
      iziToast.success({
        
        message: `Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(delay => {
      iziToast.error({
        
        message: `Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });

  formEl.reset();
});

function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
}

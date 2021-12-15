function debounce(fn, delay){
  let timerId;
  return function(){
    if (timerId){
      clearTimeout(timerId);
    }  
    timerId = setTimeout(()=>{
      fn();
      timerId = null;
    }, delay);
  }
}

const inputEl = document.querySelector('#searchbar');

const keyupListener = (event) => {
  console.log(inputEl.value);
}

const debouncedListener = debounce(keyupListener, 600);

inputEl.addEventListener('keyup', debouncedListener);
//**************************************//
function throttle(fn, delay){
  let timerId;
  return function(){
    if (timerId){
      return;
    } else {
      timerId = setTimeout(()=>{
        fn();
        timerId = null;
      }, delay)
    }
  }
}

const btn = document.querySelector('#btn');
let count = 0;
const clickListener = (event) => {
  count += 1;
  console.log(`count is ${count}`);
}

const throttledListener = throttle(clickListener, 500);
btn.addEventListener('click', throttledListener);

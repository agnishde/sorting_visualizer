const barsContainer = document.getElementById('barsContainer');
let array = [];

function generateRandomArray() {
  array = [];
  barsContainer.innerHTML = '';

  for (let i = 0; i < 50; i++) {
    const value = Math.floor(Math.random() * 100) + 1;
    array.push(value);

    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value * 4}px`;

    barsContainer.appendChild(bar);
  }
}

async function bubbleSort() {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        await swap(j, j + 1);
      }
    }
  }
}

function swap(index1, index2) {
  return new Promise((resolve) => {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;

    setTimeout(() => {
      const bars = document.querySelectorAll('.bar');
      bars[index1].style.height = `${array[index1] * 4}px`;
      bars[index2].style.height = `${array[index2] * 4}px`;
      resolve();
    }, 100);
  });
}

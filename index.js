const arrayElements = document.querySelector("#arrayElement");
const nextBtn = document.querySelector("#next");
const sortedDiv = document.querySelector(".sorted");
const sortBox = document.querySelector(".sortbox");
const sortBtn = document.querySelector("#sortBtn");
const textContent=document.querySelector(".textContent");
const requireArr = [];
let words=[];


arrayElements.addEventListener("input", function() {
  const inputValue = arrayElements.value.trim(); // Get input value and remove leading/trailing whitespace
  words = inputValue.split(","); // Split input by comma

  let totalValidWords = 0;

  for (let word of words) {
    const trimmedWord = word.trim(); // Remove leading/trailing whitespace from each word
    if (trimmedWord.length > 0 && trimmedWord.length < 15) {
      totalValidWords++;
    } else if (words.length >= 15) {
      alert("Please Enter < 15 elements");
    }
  }

});

function bubbleSort() {
  let n = requireArr.length;
  let i = 0;
  let j = 0;
  let sorted = false;

  const sortingInterval = setInterval(() => {
    if (!sorted) {
      if (requireArr[j] > requireArr[j + 1]) {
        let temp = requireArr[j];
        requireArr[j] = requireArr[j + 1];
        requireArr[j + 1] = temp;
      }
      j++;

      if (j >= n - i - 1) {
        i++;
        j = 0;
      }

      if (i >= n - 1) {
        clearInterval(sortingInterval);
        sorted = true;
        setTimeout(() => {
          textContent.innerHTML=`
          <h2>Now Elements are in Sorted Order<h2>`;
        }, 1000);
      }
      // Display the current state
      sortBox.innerHTML = "";
      for (let k = 0; k < n; k++) {
        sortBox.innerHTML += `<div class="bar" style="height:${
          requireArr[k] * 20
        }px"><h3 class="elem">${requireArr[k]}</h3></div>`;
      }
    }
    
  }, 1000);
}

function handleSort(arr) {

  for (let i = 0; i < arr.length; i++) {
    requireArr[i] = parseInt(arr[i]);
    sortBox.innerHTML += `<div class="bar" style="height:${
      requireArr[i] * 20
    }px"><h3 class="elem">${requireArr[i]}</h3></div>
    `;
  }
  sortBtn.style.display = "flex";

  sortBtn.addEventListener("click", () => {
    sortBtn.disabled = true;
    bubbleSort();
    });
}


nextBtn.addEventListener("click", () => {
  nextBtn.disabled = true;
  handleSort(words);
  nextBtn.disabled = false;
});




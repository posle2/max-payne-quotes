const quote = document.querySelector(".damn-quote");
const button = document.querySelector(".get-some-stuff");

let i = 0;

button.addEventListener('click', () => {
      new Audio('pain.mp3').play();
}, {once: true})



button.addEventListener('click', () => {
      getQuote();
      i++;
      if (i === 24) {
            i = 0;
      }
      fetch('quotes.json')
      .then(response => response.json())
      .then(json => {
            quote.textContent = `${json.quotes[i].quote}`;
            quote.classList.add("fade");
      })
});

const getQuote = () => {
      quote.classList.remove("fade");

      };


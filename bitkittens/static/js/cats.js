window.load_counter = 0

document.addEventListener("DOMContentLoaded", function() {
  window.load_counter++

  console.log(`I AM MULTIPLE MAN, called ${window.load_counter} times.`);

  let cat_counter = document.querySelector("#cat_counter")
  cat_counter.innerText = window.load_counter;

  const catButton = document.querySelector('.summon-cats');
  catButton.addEventListener('click', () => {
    axios.get("http://bitkittens.herokuapp.com/cats.json", {
      params: {
        number: 5
      }
    })
    .then((response) => {
      console.log("I'm doubled!");
      const catList = response.data.cats;

      catList.forEach((cat, index) => {
        let dataImg = document.createElement('img');
        dataImg.src = cat.photo;
        dataImg.alt = `Photo of: ${cat.name}`;

        const catBoxes = document.querySelectorAll('.cat-box');
        catBoxes[index].append(dataImg);

        let bookEntry = document.createElement('li');
        bookEntry.innerText = cat.name
        const catBook = document.querySelector('#cat-book');

        catBook.append(bookEntry);
      });
    })
    .catch((error) => {
      console.log(error);
    });
  });
});

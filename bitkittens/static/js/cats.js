document.addEventListener("DOMContentLoaded", function() {
  const catButton = document.querySelector('.summon-cats');
  
  catButton.addEventListener('click', () => {
    axios.get("http://bitkittens.herokuapp.com/cats.json", {
      params: {number: 5},
    })
    .then((response) => {
      const catList = response.data.cats;
      
      catList.forEach((cat, index) => {
        let dataImg = document.createElement('img');
        dataImg.src = cat.photo;
        dataImg.alt = `Photo of: ${cat.name}`;
        const catBoxes = document.querySelectorAll('.cat-box');
        catBoxes[index].append(dataImg);
        
        let bookEntry = document.createElement('li');
        // bookEntry.innerText = cat.name;
        bookEntry.innerText = cat.name
        const catBook = document.querySelector('#cat-book');

        catBook.append(bookEntry);
      });
    })
      .catch((error) => {
        console.log(error);
    })
  });
});

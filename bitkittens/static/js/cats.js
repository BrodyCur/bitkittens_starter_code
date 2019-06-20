document.addEventListener("DOMContentLoaded", function() {
  const catButton = document.querySelector('.summon-cats');
  
  catButton.addEventListener('click', () => {
    axios.get("http://bitkittens.herokuapp.com/cats.json", {
      params: {number: 5},
    })
    .then((response) => {
      const catList = response.data.cats;
      console.log(catList)
      
      catList.forEach((cat, index) => {
        let dataImg = document.createElement('img');
        dataImg.src = cat.photo;
        dataImg.alt = `Photo of: ${cat.name}`;
        const catBoxes = document.querySelectorAll('.cat-box');
        catBoxes[index].append(dataImg);
      })
    })
      .catch((error) => {
        console.log(error);
    })
    // console.log('hi')
  });
});

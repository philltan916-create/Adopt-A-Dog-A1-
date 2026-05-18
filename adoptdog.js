
const dogImages = document.querySelectorAll(".dog-image");

dogImages.forEach(image => {

  image.addEventListener("click", () => {

    const name = image.dataset.name;
    const breed = image.dataset.breed;
    const cost = image.dataset.cost;

    alert(
      `Dog Name: ${name}
Breed: ${breed}
Cost to Adopt: ${cost}`
    );

  });

});
let total = 0;

function showDogInfo(name, breed, fee) {

  alert(
    `Dog Name: ${name}
Breed: ${breed}
Adoption Fee: $${fee}`
  );

}

function addAdoptionFee(fee) {

  total += Number(fee);

  alert(`Current Adoption Total: $${total.toFixed(2)}`);

}

const dogImages = document.querySelectorAll(".dog-image");

dogImages.forEach(function(image) {

  image.addEventListener("click", function() {

    showDogInfo(
      image.dataset.name,
      image.dataset.breed,
      image.dataset.fee
    );

  });

});

const adoptButtons = document.querySelectorAll(".adopt-btn");

adoptButtons.forEach(function(button) {

  button.addEventListener("click", function() {

    addAdoptionFee(button.dataset.fee);

  });

});

const blogPosts = [

  {
    title: "Traveling With Your Dog",

    image: "blog-1.jpg",

    text: "Traveling with your dog can be fun and exciting when you prepare ahead of time."
  },

  {
    title: "How To Walk Multiple Dogs",

    image: "blog-2.jpg",

    text: "Walking multiple dogs takes patience and consistency."
  },

  {
    title: "Teach Your Dog To Fetch!",

    image: "blog-3.jpg",

    text: "Fetch is a great way to keep your dog active and healthy."
  }

];

const blogContainer = document.querySelector("#blog-post-container");

if (blogContainer) {

  blogPosts.forEach(function(post) {

    blogContainer.innerHTML += `

      <article class="blog-post">

        <img src="${post.image}" alt="${post.title}">

        <div class="blog-content">

          <h3>${post.title}</h3>

          <p>${post.text}</p>

        </div>

      </article>

    `;

  });

}

const contactForm = document.querySelector("#contact-form");

if (contactForm) {

  contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.querySelector("#name").value;

    const email = document.querySelector("#email").value;

    console.log("Name:", name);
    console.log("Email:", email);

    alert(
      "Thank you. The form information has been received"
    );

  });

}

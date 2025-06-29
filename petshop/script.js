function adoptPet() {
  alert("Thank you for your interest in adopting! Our team will contact you soon.");
}

function funnyMsg() {
  alert("This button doesn't do anything, don't press it!!!");
}

const pets = [
  { name: "Whiskers", type: "Cat",    age: 2, img: "img/cats/cat01.jpg" },
  { name: "Mittens",  type: "Cat",    age: 2, img: "img/cats/cat02.jpg" },
  { name: "Nuclear Missile", type: "Cat", age: 3, img: "img/cats/cat03.jpg" },
  { name: "Luna",     type: "Cat",    age: 2, img: "img/cats/cat04.jpg" },
  { name: "Milo",     type: "Cat",    age: 1, img: "img/cats/cat05.webp" },
  { name: "Rex",      type: "Dog",    age: 4, img: "img/dogs/dog01.jpg" },
  { name: "Buddy",    type: "Dog",    age: 3, img: "img/dogs/dog02.jpg" },
  { name: "Shadow",   type: "Dog",    age: 5, img: "img/dogs/dog03.jpg" },
  { name: "Charlie",  type: "Dog",    age: 2, img: "img/dogs/dog04.jpeg" },
  { name: "Chirpy",   type: "Bird",   age: 1, img: "img/birds/bird01.jpg" },
  { name: "Sunny",    type: "Bird",   age: 2, img: "img/birds/bird02.jpg" },
  { name: "Goldie",   type: "Fish",   age: 1, img: "img/fish/fish01.jpg" },
  { name: "Nibbles",  type: "Rabbit", age: 2, img: "img/rabbits/rabbit01.jpg" },
  { name: "Fluffy",   type: "Rabbit", age: 1, img: "img/rabbits/rabbit02.jpg" }
];

const listEl = document.getElementById("all-pets");

function renderPets(list) {
  listEl.innerHTML = "";
  if (!list.length) {
    listEl.textContent = "No pets match the selected filters.";
    return;
  }

  list.forEach(pet => {
    const card   = document.createElement("div");
    card.className = "pet";

    const img    = document.createElement("img");
    img.src      = pet.img;
    img.alt      = `${pet.name} the ${pet.type}`;

    const info   = document.createElement("p");
    info.textContent = `${pet.name} – ${pet.type}, age ${pet.age}`;

    const btn    = document.createElement("button");
    btn.textContent = "Adopt Now";
    btn.addEventListener("click", adoptPet);

    card.append(img, info, btn);
    listEl.appendChild(card);
  });
}

function getSelectedTypes() {
  return [...document.querySelectorAll('input[name="pet-type"]:checked')]
         .map(cb => cb.value);
}

function updateList() {
  const activeTypes = getSelectedTypes();
  const filtered    = pets.filter(p => activeTypes.includes(p.type));
  renderPets(filtered);
}

document.addEventListener("DOMContentLoaded", () => {
  updateList();

  document.querySelectorAll('input[name="pet-type"]')
          .forEach(cb => cb.addEventListener("change", updateList));
});
function adoptPet() { 

    alert("Thank you for your interest in adopting! Our team will contact you soon."); 

} 



function funnyMsg() {
	
	alert("This button doesn't do anything, don't press it!!!")
	
}



const pets = [
  { "name": "Whiskers", "type": "Cat", "age": 2, "img": "img/cats/cat01.jpg" },
  { "name": "Mittens", "type": "Cat", "age": 2, "img": "img/cats/cat02.jpg" },
  { "name": "Luna", "type": "Cat", "age": 3, "img": "img/cats/cat03.jpg" },
  { "name": "Whiskers", "type": "Cat", "age": 2, "img": "img/cats/cat04.jpg" },
  { "name": "Rex", "type": "Dog", "age": 4, "img": "img/dogs/dog01.jpg" },
  { "name": "Buddy", "type": "Dog", "age": 3, "img": "img/dogs/dog02.jpg" },
  { "name": "Shadow", "type": "Dog", "age": 5, "img": "img/dogs/dog03.jpg" },
  { "name": "Chirpy", "type": "Bird", "age": 1, "img": "img/birds/bird01.jpg" },
  { "name": "Sunny", "type": "Bird", "age": 2, "img": "img/birds/bird02.jpg" },
  { "name": "Goldie", "type": "Fish", "age": 1, "img": "img/fish/fish01.jpg" },
  { "name": "Nibbles", "type": "Rabbit", "age": 2, "img": "img/rabbits/rabbit01.jpg" },
  { "name": "Fluffy", "type": "Rabbit", "age": 1, "img": "img/rabbits/rabbit02.jpg" }
];

const ap = document.getElementById("all-pets");

pets.forEach(pet => {
  const petDiv = document.createElement("div");
  petDiv.className = "pet";

  const img = document.createElement("img");
  img.src = pet.img;
  img.alt = `Cute ${pet.type}`;

  const info = document.createElement("p");
  info.textContent = `${pet.name} - ${pet.type}, Age ${pet.age}`;

  const btn = document.createElement("button");
  btn.textContent = "Adopt Now";
  btn.onclick = adoptPet;

  petDiv.appendChild(img);
  petDiv.appendChild(info);
  petDiv.appendChild(btn);

  ap.appendChild(petDiv);
});

document.addEventListener('DOMContentLoaded', loadPets);

console.log('Pets loaded successfully.'); 
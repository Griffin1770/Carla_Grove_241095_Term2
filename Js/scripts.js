let currentIndex = 0;

function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    const totalSlides = document.querySelectorAll('.carousel-item').length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

showSlide(currentIndex);




let productsF = {
    data: [
      {
        productName: "The Classic Mars Experience",
        category: "The Oppulence",
        price: "R25000",
        image: "flightMars.png",
      },
      {
        productName: "Neptune's Cosmic Dive",
        category: "BThe Voyagerr",
        price: "R45000",
        image: "flightNeptune.png",
      },
      {
        productName: "The Giant's Journey",
        category: "The Odyssey",
        price: "R65000",
        image: "flightJupiter.png",
      },
      {
        productName: "Ring Around a Saturn",
        category: " The Explorer",
        price: "R40000",
        image: "flightSaturn.png",
      },
      {
        productName: "Uranus Uncharted",
        category: "The Endeavor",
        price: "R50000",
        image: "flightUranus.png",
      },
      {
        productName: "Moonlight Meander",
        category:  "The Voyager",
        price: "R15000",
        image: "flightMoon.png",
      },
    ],
  };
  for (let i of productsF.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("productsF").appendChild(card);
  }
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("activeSearch");
      } else {
        button.classList.remove("activeSearch");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }

  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("searchInput").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });





let form = document.forms["contact"];

form.addEventListener("submit", openSubmitModal);

function openSubmitModal(event) {
    event.preventDefault();
    var mySubmitModal = new bootstrap.Modal(document.getElementById('submitModal'), {
        keyboard: false
    });
    mySubmitModal.show();
}


let totalMarsCost = 0;
let totalNeptuneCost = 0;
let totalJupiterCost = 0;
let totalSaturnCost = 0;
let totalUranusCost = 0;
let totalMoonCost = 0;
let totalCost = 0;


function decreasesMars(){
    if(document.getElementById('marsTickets').value != 0){
        document.getElementById('marsTickets').value = parseInt(document.getElementById('marsTickets').value) - 1;
    }else{
        document.getElementById('marsTickets').value = 0;
    }
}

function increasesMars(){
    document.getElementById('marsTickets').value = parseInt(document.getElementById('marsTickets').value) + 1;
}

function decreasesNeptune(){
    if(document.getElementById('neptuneTickets').value != 0){
        document.getElementById('neptuneTickets').value = parseInt(document.getElementById('neptuneTickets').value) - 1;
    }else{
        document.getElementById('neptuneTickets').value = 0;
    }
}

function increasesNeptune(){
    document.getElementById('neptuneTickets').value = parseInt(document.getElementById('neptuneTickets').value) + 1;
}

function decreasesJupiter(){
    if(document.getElementById('jupiterTickets').value != 0){
        document.getElementById('jupiterTickets').value = parseInt(document.getElementById('jupiterTickets').value) - 1;
    }else{
        document.getElementById('jupiterTickets').value = 0;
    }
}

function increasesJupiter(){
    document.getElementById('jupiterTickets').value = parseInt(document.getElementById('jupiterTickets').value) + 1;
}

function decreasesSaturn(){
    if(document.getElementById('saturnTickets').value != 0){
        document.getElementById('saturnTickets').value = parseInt(document.getElementById('saturnTickets').value) - 1;
    }else{
        document.getElementById('saturnTickets').value = 0;
    }
}

function increasesSaturn(){
    document.getElementById('saturnTickets').value = parseInt(document.getElementById('saturnTickets').value) + 1;
}

function decreasesUranus(){
    if(document.getElementById('uranusTickets').value != 0){
        document.getElementById('uranusTickets').value = parseInt(document.getElementById('uranusTickets').value) - 1;
    }else{
        document.getElementById('uranusTickets').value = 0;
    }
}

function increasesUranus(){
    document.getElementById('uranusTickets').value = parseInt(document.getElementById('uranusTickets').value) + 1;
}

function decreasesMoon(){
    if(document.getElementById('moonTickets').value != 0){
        document.getElementById('moonTickets').value = parseInt(document.getElementById('moonTickets').value) - 1;
    }else{
        document.getElementById('moonTickets').value = 0;
    }
}

function increasesMoon(){
    document.getElementById('moonTickets').value = parseInt(document.getElementById('moonTickets').value) + 1;
}




function total(){
    totalMarsCost = parseInt(document.getElementById('marsTickets').value) * 50000;
    totalNeptuneCost = parseInt(document.getElementById('neptuneTickets').value) * 45000;
    totalJupiterCost = parseInt(document.getElementById('jupiterTickets').value) * 65000;
    totalSaturnCost = parseInt(document.getElementById('saturnTickets').value) * 40000;
    totalUranusCost = parseInt(document.getElementById('uranusTickets').value) * 50000;
    totalMoonCost = parseInt(document.getElementById('moonTickets').value) * 15000;
    totalCost = totalMarsCost + totalNeptuneCost + totalJupiterCost + totalSaturnCost + totalUranusCost + totalMoonCost;

   
    const modalBody = document.getElementById('cartModalBody');

  
    modalBody.innerHTML = `
        <div>
            <p>Mars: <span>${totalMarsCost}</span></p>
            <input type="UpButton" id="marsModalInput" value="${parseInt(document.getElementById('marsTickets').value)}" min="0" max="30" onchange="updateTicketInput('mars', this.value)">
        </div>
        
        <div>
            <p>Neptune: <span>${totalNeptuneCost}</span></p>
            <input type="UpButton" id="neptuneModalInput" value="${parseInt(document.getElementById('neptuneTickets').value)}" min="0" max="30" onchange="updateTicketInput('neptune', this.value)">
        </div>
       
        <div>
            <p>Jupiter: <span>${totalJupiterCost}</span></p>
            <input type="UpButton" id="jupiterModalInput" value="${parseInt(document.getElementById('jupiterTickets').value)}" min="0" max="30" onchange="updateTicketInput('jupiter', this.value)">
        </div>
        
        <div>
            <p>Saturn: <span>${totalSaturnCost}</span></p>
            <input type="UpButton" id="saturnModalInput" value="${parseInt(document.getElementById('saturnTickets').value)}" min="0" max="30" onchange="updateTicketInput('saturn', this.value)">
        </div>
       
        <div>
            <p>Uranus: <span>${totalUranusCost}</span></p>
            <input type="UpButton" id="uranusModalInput" value="${parseInt(document.getElementById('uranusTickets').value)}" min="0" max="30" onchange="updateTicketInput('uranus', this.value)">
        </div>
        
        <div>
            <p>Moon: <span>${totalMoonCost}</span></p>
            <input type="UpButton" id="moonModalInput" value="${parseInt(document.getElementById('moonTickets').value)}" min="0" max="30" onchange="updateTicketInput('moon', this.value)">
        </div>
        
        <div><p>Total: R ${totalCost}</p></div>
    `;
}


function updateModalInputs() {
    document.getElementById('marsModalInput').value = parseInt(document.getElementById('marsTickets').value);
    document.getElementById('neptuneModalInput').value = parseInt(document.getElementById('neptuneTickets').value);
    document.getElementById('jupiterModalInput').value = parseInt(document.getElementById('jupiterTickets').value);
    document.getElementById('saturnModalInput').value = parseInt(document.getElementById('saturnTickets').value);
    document.getElementById('uranusModalInput').value = parseInt(document.getElementById('uranusTickets').value);
    document.getElementById('moonModalInput').value = parseInt(document.getElementById('moonTickets').value);
    total();
}


function updateTicketInput(planet, value) {
    document.getElementById(`${planet}Tickets`).value = value;
    total();
}



function openCartModal() {
    total();
    var myCartModal = new bootstrap.Modal(document.getElementById('cartModal'), {
        keyboard: false
    });
    myCartModal.show();
}


function checkout() {
    window.location.href = "../index.html";
}








let products = {
    data: [
      {
        productName: "The Classic Mars Experience",
        category: "The Oppulence",
        price: "R25000",
        image: "flightMars.png",
      },
      {
        productName: "Neptune's Cosmic Dive",
        category: "BThe Voyagerr",
        price: "R45000",
        image: "flightNeptune.png",
      },
      {
        productName: "The Giant's Journey",
        category: "The Odyssey",
        price: "R65000",
        image: "flightJupiter.png",
      },
      {
        productName: "Ring Around a Saturn",
        category: " The Explorer",
        price: "R40000",
        image: "flightSaturn.png",
      },
      {
        productName: "Uranus Uncharted",
        category: "The Endeavor",
        price: "R50000",
        image: "flightUranus.png",
      },
      {
        productName: "Moonlight Meander",
        category:  "The Voyager",
        price: "R15000",
        image: "flightMoon.png",
      },
    ],
  };
  for (let i of products.data) {
    //Create Card
    let card = document.createElement("div");
    //Card should have category and should stay hidden initially
    card.classList.add("card", i.category, "hide");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);
    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container);
    document.getElementById("products").appendChild(card);
  }
  //parameter passed from button (Parameter same as category)
  function filterProduct(value) {
    //Button class code
    let buttons = document.querySelectorAll(".button-value");
    buttons.forEach((button) => {
      //check if value equals innerText
      if (value.toUpperCase() == button.innerText.toUpperCase()) {
        button.classList.add("activeSearch");
      } else {
        button.classList.remove("activeSearch");
      }
    });
    //select all cards
    let elements = document.querySelectorAll(".card");
    //loop through all cards
    elements.forEach((element) => {
      //display all cards on 'all' button click
      if (value == "all") {
        element.classList.remove("hide");
      } else {
        //Check if element contains category class
        if (element.classList.contains(value)) {
          //display element based on category
          element.classList.remove("hide");
        } else {
          //hide other elements
          element.classList.add("hide");
        }
      }
    });
  }

  //Search button click
  document.getElementById("search").addEventListener("click", () => {
    //initializations
    let searchInput = document.getElementById("searchInput").value;
    let elements = document.querySelectorAll(".product-name");
    let cards = document.querySelectorAll(".card");
    //loop through all elements
    elements.forEach((element, index) => {
      //check if text includes the search value
      if (element.innerText.includes(searchInput.toUpperCase())) {
        //display matching card
        cards[index].classList.remove("hide");
      } else {
        //hide others
        cards[index].classList.add("hide");
      }
    });
  });

  
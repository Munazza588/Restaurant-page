import restaurantImg from "./images/restaurant.jpg";

function createTheContentPart() {
    const header = document.createElement("h1");
    const img = document.createElement("img");
    img.classList.add("food-pic");
    const description = document.createElement("p");
    header.textContent = "Welcome to Our Amazing Resturant!!";
    img.src = restaurantImg;

    description.textContent = "Our Restuarant has the best quality food. The service is gread.\
                Our guests are treated as kings and queens. Best quality time is \
                spend at our returant."

    const div = document.querySelector('#content');
    div.appendChild(header);
    div.appendChild(img);
    div.appendChild(description);
}

createTheContentPart();
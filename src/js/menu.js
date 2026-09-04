function menuItemsCreate() {
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    const item = document.createElement("li");
    const item2 = document.createElement("li");
    const item3 = document.createElement("li");

    item.textContent = "Biryani";
    item.textContent = "noodles";
    item.textContent = "fries";



    ul.appendChild(item);
    ul.appendChild(item2);
    ul.appendChild(item3);

    div.appendChild(ul);

}
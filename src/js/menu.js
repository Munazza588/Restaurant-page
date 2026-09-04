export function menuItemsCreate() {
    const div = document.querySelector("#content");
    const ul = document.createElement("ul");
    const item = document.createElement("li");
    const item2 = document.createElement("li");
    const item3 = document.createElement("li");

    item.textContent = "Biryani";
    item2.textContent = "noodles";
    item3.textContent = "fries";
    
    ul.appendChild(item);
    ul.appendChild(item2);
    ul.appendChild(item3);

    div.appendChild(ul);

}
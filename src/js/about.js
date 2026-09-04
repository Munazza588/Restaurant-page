export function infoAboutRestaurant() {
    const div = document.querySelector("#content");
    const p = document.createElement("p");
    p.textContent = `Founded in 2015, our restaurant started as a tiny family kitchen with just four tables and a dream. What began as weekend cooking for friends and neighbors quickly grew into something bigger — a place where strangers become regulars and every dish is made with the same care we'd give our own family.

We believe great food doesn't need to be complicated. Just fresh ingredients, honest recipes, and a whole lot of passion. Every plate that leaves our kitchen carries a little piece of that original family spirit — because to us, cooking has always been about bringing people together.

Come hungry. Leave happy. That's the only rule we've ever needed.`;
 
div.appendChild(p);

}
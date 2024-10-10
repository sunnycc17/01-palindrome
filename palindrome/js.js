const input = document.querySelector("#text-input");
const button = document.querySelector("#check-btn");
const p = document.querySelector("#info-txt");

button.addEventListener("click", () => {
    const text = input.value.trim();
    if (text.length === 0) {
        alert("Please input a value");
        return;
    }
    const filterInput = text.toLowerCase().replace(/[^A-Z0-9]/ig, "");
    console.log(`1 ${filterInput}`);
    const reverseInput = filterInput.split("").reverse().join(""); 
    console.log(`2 ${filterInput}`);
    console.log(`3 ${reverseInput}`);
    p.style.display = "block";
    if(filterInput !== reverseInput) {

        p.textContent = `${text} is not a palindrome`;
    } else {
        p.textContent = `${text} is a palindrome`;
    }
});

input.addEventListener("keyup", () => {
    p.style.display = "none";
});

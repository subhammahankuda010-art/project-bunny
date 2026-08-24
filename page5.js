const wish = document.querySelector(".wish");
const mainText = document.querySelector(".main-text");
const youText = document.getElementById("youText");
const messageBox = document.querySelector(".message-box");

youText.style.display = "none";

wish.addEventListener("click", () => {
    wish.style.display="none";

    setTimeout(() => {
        mainText.style.display = "block";
        youText.style.display = "block";
    },500);
});


youText.addEventListener("click",()=>{
    messageBox.classList.remove("hidden");
}); 
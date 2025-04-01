document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector("button");
    button.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Thanks for reaching out! I'll get back to you soon.");
    });
});
console.log("JS FILE LOADED");

/**Contact page */
document.addEventListener("DOMContentLoaded", function () {
    
    const textarea = document.getElementById("messageBox");

    if (textarea) {
        textarea.addEventListener("input", function () {
            this.style.height = "auto";
            this.style.height = this.scrollHeight + "px";
        });
    }

});
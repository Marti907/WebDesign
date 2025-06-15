document.addEventListener("DOMContentLoaded", function () {
    const aboutLink = document.getElementById("aboutLink");
    const flipper = document.querySelector(".flipper");
    const aboutImage = document.getElementById("AboutMe");

    let showingAboutMe = aboutImage.src.includes("AboutMe.jpg");

    function flipPhoto() {
        flipper.classList.add("flipped");
        setTimeout(() => {
            aboutImage.src = showingAboutMe ? "About Me/AboutMe.jpg" : "About Me/logo1.jpg";
        }, 300);
        setTimeout(() => {
            flipper.classList.remove("flipped");
        }, 600);
        showingAboutMe = !showingAboutMe;
    }

    if (window.location.hash === "#flipAboutMe") {
        flipPhoto();
        history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    if (aboutLink) {
        aboutLink.addEventListener("click", function (e) {
            if (aboutLink.getAttribute("href").startsWith("#")) {
                e.preventDefault();
                flipPhoto();
            }
        });
    }
    aboutImage.addEventListener("click", function () {
        flipPhoto();
    });
});





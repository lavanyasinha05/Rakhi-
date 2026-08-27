/* =========================
   NAME CHECK
========================= */

function checkName() {

    const input = document.getElementById("nameInput");

    const error = document.getElementById("error");

    const login = document.getElementById("login");

    const website = document.getElementById("website");

    const name = input.value.trim().toLowerCase();


    // Accept Yash in different ways
    if (
        name === "yash" ||
        name === "yashh" ||
        name === "yashhh" ||
        name === "yashu" ||
        name === "siddharth" ||
        name === "sid" ||
        name === "siddu" ||
        name === "sidhu"
    ) {

        // Hide login screen
        login.classList.add("hidden");

        // Show website
        website.classList.remove("hidden");


        // Start music
        const music =
            document.getElementById("backgroundMusic");

        if (music) {

            music.volume = 0.5;

            music.play().catch(function () {

                console.log(
                    "Music will start after browser permission."
                );

            });

        }


        // Start from top
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    } else {

        error.innerText =
            "ummm... you're not Yash 😭 try again.";

        input.value = "";

        input.focus();

    }

}


/* =========================
   ENTER KEY
========================= */

document
    .getElementById("nameInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            event.preventDefault();

            checkName();

        }

    });


/* =========================
   PHOTO POPUP
========================= */

const photoBoxes =
    document.querySelectorAll(".photo-box");


photoBoxes.forEach(function(box) {

    box.addEventListener("click", function() {

        const image =
            box.querySelector("img");

        const modal =
            document.getElementById("photoModal");

        const modalImage =
            document.getElementById("modalImage");

        const modalCaption =
            document.getElementById("modalCaption");


        if (image && modal) {

            modalImage.src = image.src;

            modalCaption.innerText =
                image.alt;

            modal.classList.add("show");

        }

    });

});


/* =========================
   CLOSE PHOTO
========================= */

function closeModal() {

    const modal =
        document.getElementById("photoModal");

    modal.classList.remove("show");

}


/* =========================
   CLICK OUTSIDE PHOTO
========================= */

document
    .getElementById("photoModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {

            closeModal();

        }

    });


/* =========================
   ESC KEY CLOSE
========================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeModal();

        }

    }
);


/* =========================
   FINAL EXIT
========================= */

function exitSite() {

    const music = document.getElementById("backgroundMusic");


    // CREATE GOODBYE SCREEN FIRST
    const goodbyeScreen = document.createElement("div");

    goodbyeScreen.innerHTML = `

        <div style="
            min-height:100vh;
            display:flex;
            align-items:flex-start;
            justify-content:center;
            text-align:center;
            padding:35px 20px 70px;
            box-sizing:border-box;

            background:#f4c1d0;
            color:#55152b;
            font-family:'Quicksand',sans-serif;
        ">

            <div style="
                width:min(90%,680px);
                min-height:800px;
                padding:70px 50px;
                box-sizing:border-box;

                background:#ffe9f0;
                border-radius:38px;
            ">

                <h1 style="
                    font-family:'Caveat',cursive;
                    font-size:clamp(42px,6vw,58px);
                    color:#681832;
                ">
                    okay bye Yash 😭
                </h1>

                <div style="font-size:45px;">
                    💗
                </div>

                <p style="
                    font-size:15px;
                    line-height:2;
                    font-weight:600;
                ">
                    Happy Rakhi ♡
                </p>

                <p style="
                    font-size:17px;
                    line-height:2;
                    font-weight:600;
                ">
                    Thank you for surviving my over dramatic
                    rakhi website. 😭
                </p>

                <p style="
                    font-family:'Caveat',cursive;
                    font-size:30px;
                    font-weight:700;
                ">
                    Now, where's my gift? 👀🎁
                </p>

            </div>

        </div>

    `;


    // Hide the website but KEEP the audio alive
    document.getElementById("website").style.display = "none";


    // Add goodbye screen
    document.body.appendChild(goodbyeScreen);


    // Fade music slowly
    if (music) {

        const fadeMusic = setInterval(() => {

            if (music.volume > 0.02) {

                music.volume = Math.max(
                    0,
                    music.volume - 0.02
                );

            } else {

                clearInterval(fadeMusic);

                music.pause();
                music.currentTime = 0;

            }

        }, 150);

    }

}
var bullets = document.querySelector("p");
bullets.style.color = "darkred";
bullets.textContent = "FRONT END DEVELOPER / RETIRED ARMY / NAVY VETERAN";
bullets.style.textDecoration = "underline overline";
bullets.style.fontSize = "1.5em";
bullets.style.textAlign = "center";


var footer = document.querySelector("footer");
footer.textContent = "©️ 2024 Kelley Portfolio. All Rights Reserved.";

    document.getElementById("container").appendChild(footer);


    

const audioBtn = document.querySelector("img")



audioBtn.addEventListener("click", () => {
    console.log("audio clicked");
    const audio = new Audio("Reigns.mp3");
    audio.volume = .1;
    audio.play()
    onmouseenter

    
}) 




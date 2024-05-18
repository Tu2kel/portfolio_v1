var bullets = document.querySelector("p");
bullets.style.color = "darkred";
bullets.textContent = "FRONT END DEVELOPER / RETIRED ARMY / NAVY VETERAN";
bullets.style.textDecoration = "underline overline";
bullets.style.fontSize = "1.5em";
bullets.style.textAlign = "center";


var footer = document.querySelector("footer");
footer.textContent = "©️ 2024 Kelley Portfolio. All Rights Reserved.";

    document.getElementById("container").appendChild(footer);


    

    var audioBtn = document.getElementById("container")
    let audioPlayed = false
    let audio = new Audio("Reigns.mp3");
        audio.volume = 0.1;
    
    
    audioBtn.addEventListener("mouseover", () => {
    
        if (!audioPlayed ) {
            
            console.log("audio started");
            // const audio = new Audio("Reigns.mp3");
            // audio.volume = .1;
            audio.play()
    
            audioPlayed = true
        }    
        
    })  

    audioBtn.addEventListener("click", () => {
        if (audioPlayed) {
            console.log("audio stopped");
            audio.pause();
            audio.currentTime = "none"; // Reset audio to start
            audioPlayed = false;
        }
    });





var article = document.createElement("article");
article.setAttribute("id", "article");
article.setAttribute("class", "active");


    document.getElementById("middle").appendChild(article);

/*---------------------------------------------------------- */

var h2Intro = document.createElement("h2");
h2Intro.textContent = "INTRO";
h2Intro.setAttribute("class", "h2Intro");

    document.getElementById("article").prepend(h2Intro);

    /*---------------------------------------------------------- */

var xhome = document.createElement("a");
xhome.textContent = "X";
xhome.setAttribute("class", "xhome");
xhome.setAttribute("href", "index.html");



    document.querySelector("h2").appendChild(xhome);

/*---------------------------------------------------------- */

var image = document.createElement("img");
image.setAttribute("class", "intro_Img")
image.src = "/images/LinkedinPhoto.png";

    document.getElementById("article").appendChild(image);


    /*---------------------------------------------------------- */

var introPara = document.createElement("p");
introPara.setAttribute("class", "introPara")

    introPara.textContent = `A highly motivated professional with over 10 years of military experience. 
    I have retired from the military and looking to commit to a new Organization in a new field. I bring a strong foundation in management, teamwork, and process improvement.  
    I consistently strive to enhance the organizations I join, fostering a collaborative environment 
    while readily embracing opportunities to learn and grow. Thank you for your consideration.`


    document.getElementById("article").appendChild(introPara)

/* could just make footer which would fall to end of container */

var footer = document.querySelector("footer")
footer.textContent = "©️ 2024 Kelley Portfolio. All Rights Reserved."

    document.getElementById("container").appendChild(footer)


    var audioBtn = document.querySelector("img")


audioBtn.addEventListener("click", () => {
    console.log("audio clicked");
    const audio = new Audio("/media/Reigns.mp3");
    audio.volume = .1;
    audio.play()

    
})




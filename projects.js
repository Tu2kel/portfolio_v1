// var audioBtn = document.querySelector("#proj_Img")
var audioBtn = document.querySelector("img")



audioBtn.addEventListener("click", () => {
    console.log("audio clicked");
    const audio = new Audio("Zepp.mp3");
    audio.volume = .1;
    audio.play()

    
}) 

var article = document.createElement("article");
article.setAttribute("id", "article");
article.setAttribute("class", "active");


    document.getElementById("middle").appendChild(article);

/*-------------------Changes with Page----------------------------------- */

var h2Work = document.createElement("h2");
h2Work.textContent = "PROJECTS";
h2Work.setAttribute("class", "h2Work");

    document.getElementById("article").prepend(h2Work);

    /*---------------------------------------------------------- */

var xhome = document.createElement("a");
xhome.textContent = "X";
xhome.setAttribute("class", "xhome");
xhome.setAttribute("href", "index.html");



    document.querySelector("h2").appendChild(xhome);

/*---------------------------------------------------------- */

var image = document.createElement("img");
image.setAttribute("class", "work_Img")
image.src = "starWars.jpg";

    document.getElementById("article").appendChild(image);


    /*---------------------------------------------------------- */

var introPara = document.createElement("p");
introPara.setAttribute("class", "introPara")

    introPara.textContent = ` Add Links to GitHub individual projects 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quos quibusdam numquam error, eum dolor ad ipsum et labore veniam dignissimos accusamus excepturi sapiente totam corrupti iste officiis dolore ut!
    `
    /* add a tag to link  */


    document.getElementById("article").appendChild(introPara)

/* could just make footer which would fall to end of container */

var footer = document.querySelector("footer")
footer.textContent = "©️ 2024 Kelley Portfolio. All Rights Reserved."

    document.getElementById("container").appendChild(footer)

   




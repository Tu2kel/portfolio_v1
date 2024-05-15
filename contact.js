


var article = document.createElement("article");
article.setAttribute("id", "article");
article.setAttribute("class", "active");


    document.getElementById("middle").appendChild(article);

/*---------------------------------------------------------- */

var h2Intro = document.createElement("h2");
h2Intro.textContent = "CONTACT";
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
image.setAttribute("class", "contact_Img")
image.src = "/images/onlygodknows.jpeg";

    document.getElementById("article").appendChild(image);


    /*---------------------------------------------------------- */

var introPara = document.createElement("pre");
introPara.setAttribute("class", "introPara");

    introPara.textContent =   
     `Anthony K. Kelley Sr.\n` + `Front End Developer\n`  + `example@gmail.com\n` + `(555) 555-5555` 
    
    

    


    document.getElementById("article").appendChild(introPara)

/* could just make footer which would fall to end of container */

var footer = document.querySelector("footer")
footer.textContent = "©️ 2024 Kelley Portfolio. All Rights Reserved."

    document.getElementById("container").appendChild(footer)





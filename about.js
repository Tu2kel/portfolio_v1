

var article = document.createElement("article");
article.setAttribute("id", "article");
article.setAttribute("class", "active");


    document.getElementById("middle").appendChild(article);

/*-------------------Changes with Page----------------------------------- */

var h2Work = document.createElement("h2");
h2Work.textContent = "ABOUT";
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
image.setAttribute("class", "about_Img")
image.src = "frontPhoto2.png";

    document.getElementById("article").appendChild(image);


    /*---------------------------------------------------------- */

var introPara = document.createElement("p");
introPara.setAttribute("class", "introPara")

    introPara.textContent = ` Former soldier turned coding enthusiast!\n
    I'm a highly motivated front-end developer with a passion 
    for building user-friendly and engaging web applications. After a 
    fulfilling career in logistics management, I'm excited to leverage 
    my problem-solving skills and attention to detail in the dynamic 
    world of IT. I've learned the MERN stack 
    (MongoDB, Express.js, React.js, Node.js), 
    along with Git, JavaScript, HTML + CSS and polishing up JSON Web Tokens. 
    I'm constantly expanding my knowledge by building personal projects 
    and actively learning new technologies. ` 

    /* add a tag to link  */


    document.getElementById("article").appendChild(introPara)

/* could just make footer which would fall to end of container */

var footer = document.querySelector("footer")
footer.textContent = "©️ 2024 Kelley Portfolio. All Rights Reserved."

    document.getElementById("container").appendChild(footer)




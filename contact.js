


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
image.src = "onlygodknows.jpeg";

    document.getElementById("article").appendChild(image);


    /*---------------------------------------------------------- */

var introPara = document.createElement("pre");
introPara.setAttribute("class", "introPara");

    introPara.textContent =   
     `Anthony K. Kelley Sr.\n` +  `Front End Developer\n`  
    
    

    


    document.getElementById("article").appendChild(introPara);


    
    var iconDiv = document.createElement("div"); 
    iconDiv.setAttribute("id", "socialMedia");      
    document.getElementById("article").appendChild(iconDiv);
    
    
    var linkedIn = document.createElement("img");
    linkedIn.setAttribute("class" , "linkedInIcon");
    linkedIn.setAttribute("title" , "LinkedIn");
    linkedIn.src = "linkedIn_Icon.png";

    var github = document.createElement("img");
    github.setAttribute("class", "githubIcon");
    github.setAttribute("title" , "GitHub");
    github.src = "github_icon2-removebg-preview.png";

    var email = document.createElement("img");
    email.setAttribute("class", "emailIcon");
    email.src = "email2.png";
    email.setAttribute("title" , "Email");
    

    document.getElementById("socialMedia").appendChild(linkedIn);
    document.getElementById("socialMedia").appendChild(github);
    document.getElementById("socialMedia").appendChild(email);

/* could just make footer which would fall to end of container */

var footer = document.querySelector("footer")
footer.textContent = "©️ 2024 Kelley Portfolio. All Rights Reserved."

    document.getElementById("container").appendChild(footer)





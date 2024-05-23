


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


    var hr = document.createElement("hr");
    var hr2 = document.createElement("hr");

document.querySelector("article").prepend(hr);
document.querySelector("article").append(hr2);

console.log("Script started");
    
    var iconDiv = document.createElement("div"); 
    iconDiv.setAttribute("id", "socialMedia");      
    document.getElementById("article").appendChild(iconDiv);

    console.log("Div created and appended");


    const toLinkedIn = document.createElement("a");
    toLinkedIn.setAttribute("id", "toLinkedIn");
    // toLinkedIn.setAttribute("href", "https://www.linkedin.com/in/anthony-k-kelley-sr/");
    toLinkedIn.setAttribute("target", "_blank")
   
    console.log("Link created");
    
    var linkedIn = document.createElement("img");
    linkedIn.setAttribute("class" , "linkedInIcon");
    linkedIn.setAttribute("title" , "LinkedIn");
    linkedIn.src = "linkedIn_Icon.png";
    
    console.log("Image created");


    toLinkedIn.appendChild(linkedIn);
    iconDiv.appendChild(toLinkedIn);

    console.log("Image and link appended");
   

    linkedIn.addEventListener("click", () => { 
        window.location.href = "https://www.linkedin.com/in/anthony-k-kelley-sr/"
        console.log("Link clicked");
        linkedIn.setAttribute("target", "_blank")

    })

    console.log("Event listener added");

    var toGithub = document.createElement("a");
    toGithub.setAttribute("id", "toGithub");

    var github = document.createElement("img");
    github.setAttribute("class", "githubIcon");
    github.setAttribute("title" , "GitHub");
    github.src = "github_icon2-removebg-preview.png";
    // github.setAttribute("target", "_blank")

    // github.setAttribute("href", "https://github.com/Tu2kel/Level-5_Final_Proj");


    toGithub.appendChild(github);
    iconDiv.appendChild(toGithub);

    github.addEventListener("click", () => { 
        window.location.href = "https://github.com/Tu2kel/Level-5_Final_Proj"
        console.log("Link clicked");
        github.setAttribute("target", "_blank")


    })

   
    var toEmail = document.createElement("a");
    toEmail.setAttribute("id", "toEmail");
    toEmail.setAttribute("href", "mailto:yourEmail@example.com");

    var email = document.createElement("img");
    email.setAttribute("class", "emailIcon");
    email.src = "email2.png";
    email.setAttribute("title" , "Email");

    toEmail.appendChild(email);
    iconDiv.appendChild(toEmail);
    

    document.getElementById("socialMedia").appendChild(linkedIn);
    document.getElementById("socialMedia").appendChild(github);
    document.getElementById("socialMedia").appendChild(email);

/* could just make footer which would fall to end of container */

var footer = document.querySelector("footer")
footer.textContent = "©️ 2024 Kelley Portfolio. All Rights Reserved."

    document.getElementById("container").appendChild(footer)





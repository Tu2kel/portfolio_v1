var article = document.createElement("article");
    article.setAttribute("id", "article");
    article.setAttribute("class", "active");

    var middle = document.getElementById("middle");
    middle.appendChild(article);

    var h2Intro = document.createElement("h2");
    h2Intro.textContent = "RESUME";
    h2Intro.setAttribute("class", "h2Intro");
    article.prepend(h2Intro);

    var xhome = document.createElement("a");
    xhome.textContent = "X";
    xhome.setAttribute("class", "xhome");
    xhome.setAttribute("href", "index.html");
    h2Intro.appendChild(xhome);

    var resume = document.createElement("iframe");
    resume.setAttribute("class", "resume_Img");
    resume.src = "resume_akelley.pdf"; // <---- Placed the Resume
    article.appendChild(resume);

    // Make the article section visible
    article.style.display = 'block';

/* ------------------------------Login Page Blocker- Below-------------------------------------- */




document.addEventListener("DOMContentLoaded", () => {
    // Add the footer text
    var footer = document.querySelector("footer");
    footer.textContent = "©️ 2024 Kelley Portfolio. All Rights Reserved.";
    
});

// function checkLogin() {
//     const username = document.getElementById('username').value;
//     const password = document.getElementById('password').value;

//     // Simple username and password check
//     if (username === "user" && password === "password") {
//         alert("Login successful!");
//         document.getElementById('loginOverlay').style.display = 'none';
//         showResume();
//     } else {
//         alert("Incorrect username or password. Please try again.");
//     }
// }

// function showResume() {
//     var article = document.createElement("article");
//     article.setAttribute("id", "article");
//     article.setAttribute("class", "active");

//     var middle = document.getElementById("middle");
//     middle.appendChild(article);

//     var h2Intro = document.createElement("h2");
//     h2Intro.textContent = "RESUME";
//     h2Intro.setAttribute("class", "h2Intro");
//     article.prepend(h2Intro);

//     var xhome = document.createElement("a");
//     xhome.textContent = "X";
//     xhome.setAttribute("class", "xhome");
//     xhome.setAttribute("href", "index.html");
//     h2Intro.appendChild(xhome);

//     var resume = document.createElement("iframe");
//     resume.setAttribute("class", "resume_Img");
//     resume.src = "Anthony K Kelley Resume.pdf"; 
//     article.appendChild(resume);

//     // Make the article section visible
//     article.style.display = 'block';
// }






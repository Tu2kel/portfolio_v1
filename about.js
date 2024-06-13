

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
// Coding
    // introPara.textContent = ` Former soldier turned coding enthusiast! I'm a highly motivated and detail-oriented front-end developer with a passion for crafting user-friendly and engaging web applications. Leveraging my problem-solving skills and attention to detail honed in logistics management, I'm excited to bring my expertise to the dynamic world of IT. Proficient in the MERN stack (MongoDB, Express.js, React.js, Node.js), Git, JavaScript, HTML + CSS, and JSON Web Tokens, I'm dedicated to continuously expanding my skill set through personal projects and ongoing learning. Let's build something amazing together! ` 
    
//System Administrator    
    introPara.textContent = ` Highly motivated and results-driven professional with a strong foundation in IT and cybersecurity. Leveraging 20 years of experience in logistics management, I'm transitioning into a career in system administration. Proven ability to analyze data, identify and mitigate risks, and lead collaborative teams. Eager to utilize my technical expertise and analytical mindset to maintain and optimize system performance, security, and efficiency. Dedicated to staying up-to-date with industry trends and advancements, I thrive on challenges and am excited to bring my tenacity and collaborative spirit to a System Administrator role. ` 
    
//Cybersecurity Analyst  
        // introPara.textContent = ` Highly motivated and results-driven professional with a strong foundation in IT and cybersecurity. Leveraging 20 years of experience in logistics management and a passion for cybersecurity, I'm transitioning into a career as a cybersecurity analyst. Proven ability to analyze data, identify and mitigate risks, and lead collaborative teams. Skilled in threat analysis, incident response, and security assessments. Eager to utilize my technical expertise and analytical mindset to monitor and improve cybersecurity posture. Dedicated to staying up-to-date with industry trends and advancements, I thrive on challenges and am excited to bring my tenacity and collaborative spirit to a cybersecurity analyst role. ` 

    /* add a tag to link  */


    document.getElementById("article").appendChild(introPara)


    var hr = document.createElement("hr");
    var hr2 = document.createElement("hr");

document.querySelector("article").prepend(hr);
document.querySelector("article").append(hr2);







/* could just make footer which would fall to end of container */

var footer = document.querySelector("footer")
footer.textContent = "©️ 2024 Kelley Portfolio. All Rights Reserved."

    document.getElementById("container").appendChild(footer)




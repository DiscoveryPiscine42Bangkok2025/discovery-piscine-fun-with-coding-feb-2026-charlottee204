const home = document.getElementById("home");
const about = document.getElementById("about");
const skill = document.getElementById("skill");
const contact = document.getElementById("contact");
const other = document.getElementById("other");
const h1 = document.querySelectorAll("h1");
const p = document.querySelectorAll("p");
const large = document.querySelectorAll(".large");

arr = [home,about,skill,contact,other, ...h1,...p,];
arr.forEach(el => {
    el.addEventListener("mouseover", () => {
        el.style.color = "mediumseagreen";
        el.style.transform = "scale(1.3)";
        if (el.tagName === "P") {
            const insideLarge = el.querySelectorAll(".large");
            insideLarge.forEach(lg => {
                lg.style.color = "mediumseagreen";
                lg.style.display = "inline-block"; 
            });
        }
    });

    el.addEventListener("mouseout", () => {
        el.style.color = "rgb(217, 212, 212)";
        el.style.transform = "scale(1)";
        if (el.tagName === "P") {
        const insideLarge = el.querySelectorAll(".large");
        insideLarge.forEach(lg => {
            lg.style.color = "rgb(217, 212, 212)";
            lg.style.transform = "scale(1)";
        });
        }
    });
});

let ids = ["homeButton", "workButton", "aboutButton", "homePage", "workPage", "aboutPage"]
let buttonObj = [];
let pageObj = [];
let currentElement;
let currentPage = 0;

for (let i = 0; i < 3; i++) {
    document.getElementById(ids[i]).addEventListener('click', (e) => {
        showOnly(document.getElementById(ids[i + 3]));
    });
    buttonObj.push(document.getElementById(ids[i]));
    pageObj.push(document.getElementById(ids[i + 3]));
}

pageObj.push(document.getElementById("work"));

showOnly(pageObj[0]);

let read_more = [...document.getElementsByClassName("read-more")]

read_more.forEach(element => element.addEventListener('click', (e) => {
    showOnly(document.getElementById("work"));
    changeWorkDetails(element.id);
}));

function showOnly(element) {
    pageObj.forEach(page => page.style.display = "none");
    element.style.display = "block";
    currentElement = element;
}


function changeWorkDetails(id) {
    let title = document.getElementById("workTitle");
    let description = document.getElementById("workDetail");
    let img = document.getElementById("detailImg");
    if(id < data.length) {
        title.innerHTML = data[id].name;
        description.innerHTML = data[id].description;
        img.src = data[id].imageSrc;
    } else {
        title.innerHTML = "placeholder";
        description.innerHTML = "place holder description";
        img.src = './img/temp.png';
    }
    for(let i = 0; i < data[id].links.length; i++) {
        description.innerHTML += "<br><br>Check out the " + ((i == 0) ? "playable" : "github") + " link <a href=\"" + data[id].links[i] + "\" target=\"\_target\" rel=\"noopener noreferrer\"> here</a>";
    }
}
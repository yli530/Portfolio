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

pageObj.push(document.getElementById("workDetail"));

showOnly(pageObj[0]);

let read_more = [...document.getElementsByClassName("read-more")]

read_more.forEach(element => element.addEventListener('click', (e) => {
    showOnly(document.getElementById("workDetail"));
    changeWorkDetails(element.id);
}));

function showOnly(element) {
    pageObj.forEach(page => page.style.display = "none");
    element.style.display = "block";
    currentElement = element;
}


function changeWorkDetails(id) {
    console.log(id);
    let element = document.getElementById("workDetail");
    element.innerHTML = data[id].description;
}
let key = "64ebb503182f4bda9aa16b56e49bb60f";
let cardData = document.querySelector(".cardData");
let SearchBtn = document.getElementById("Searchbtn");
let inputData = document.getElementById("inputData");
let searchType = document.getElementById("type");

const getData = async(input) =>{
    let res = await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsonData = await res.json();
    console.log(jsonData.articles[0]);
    
    searchType.innerText="Search : "+input;
    inputData.value=""
    cardData.innerHTML="";
     jsonData.articles.forEach(function(article){
        console.log(article);

    let divs = document.createElement("div");
    divs.classList.add("card");
    cardData.appendChild(divs);

    divs.innerHTML=`
    <img src="${article.urlToImage}" alt="">
    <h3>${article.title}</h3>
    <p>${article.description}</p>
    `    
    divs.addEventListener("click", function(){
        window.open(article.url);
    })      
    })
   
}

window.addEventListener("load", function(){
    getData("World")
})
SearchBtn.addEventListener("click", function(){
    let inputValue = inputData.value;
    getData(inputValue);
})
inputData.addEventListener("keypress",function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        let inputValue = inputData.value;
        getData(inputValue);
    }
});
function navClick(navName) {

    if(navName == "news"){
        document.getElementById("news").style.color="white";
        document.getElementById("lists").style.color="rgb(247, 198, 221)";
        document.getElementById("stories").style.color="rgb(247, 198, 221)";
    }

    if(navName == "lists"){
        document.getElementById("news").style.color="rgb(247, 198, 221)";
        document.getElementById("lists").style.color="white";
        document.getElementById("stories").style.color="rgb(247, 198, 221)";
    }

    if(navName == "stories"){
        document.getElementById("news").style.color="rgb(247, 198, 221)";
        document.getElementById("lists").style.color="rgb(247, 198, 221)";
        document.getElementById("stories").style.color="white";
    }

    getData(navName)
}
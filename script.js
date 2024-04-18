const API_KEY = "3c27e981f7a043c69c42d78bee0a64e7";
let cardData = document.querySelector(".cardData");
let searchBtn = document.getElementById("search_Btn");
let inputData = document.getElementById("inputData");
let searchType = document.getElementById("type")

const getData=async(input) =>{
    let res=await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${API_KEY}`);
    let jsonData =await res.json();
    console.log(jsonData.articles);

    searchType.innerHTML="Search : "+input;
    inputData.value=""
    cardData.innerHTML="";
    jsonData.articles.forEach(function(article){
    console.log(article);


    let divs = document.createElement("div");
    divs.classList.add("card");
    cardData.appendChild(divs);

    divs.innerHTML=`
    <img src="${article.urlToImage}" alt="">
    <h3 class="mt-3 text-justify">${article.title}</h3>
    <p>${article.description}</p>  
    `
    divs.addEventListener("click",function(){
        window.open(article.url);
    })
    
    })    
}

window.addEventListener("load",function(){
    getData("India")
}) 

searchBtn.addEventListener("click",function() {
    let inputText = inputData.value;
    getData(inputText);

})

function navClick(navName){
    // if(navName="finance")
    getData(navName)
}



// async function fetchNews(query) {
//     const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
//     const data = await res.json();
//     bindData(data.articles);    
// }
// function bindData(articles) {
//     const cardsContainer = document.getElementById('cards-container');
//     const newsCardTemplate = document.getElementById('template_news_card');

//     cardsContainer.innerHTML = "";

//     articles.forEach((article) => {
//         if (!article.urlToImage) return;
//         const cardClone = newsCardTemplate.content.cloneNode(true);
//         fillDataInCard(cardClone, article);
//         cardsContainer.appendChild(cardClone);

//     });

// }

// function fillDataInCard(cardClone,article){
//     const newsImg =cardClone.querySelector('#news-img');
//     const newsTitle =cardClone.querySelector('#news-title');
//     const newsSource =cardClone.querySelector('#news-source');
//     const newsDesc =cardClone.querySelector('#news-desc');

//     newsImg.src=article.urlToImage;
//     newsTitle.innerHTML=article.title;
//     newsDesc.innerHTML=article.decription;

//     const data= new Date(article.publishedAt).toLocaleString("en-US", {
//         timeZone:"Asia/Jakarta"
//     }); 

//     newsSource.innerHTML =`${article.source.name}· ${date}`;

// }
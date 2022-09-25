let main=document.createElement("div");
main.classList.add("main");

let h1=document.createElement("h1");
h1.classList.add("title");
h1.innerHTML="Excuser";

let box=document.createElement("div");
box.classList.add("box");

main.append(h1,box);
document.body.append(main);

async function getRandomJoke(){
    try {
        let response=await fetch("https://excuser.herokuapp.com/v1/excuse");
        let jsonResponse=await response.json();
        return jokeInCard(jsonResponse);
    } catch (error) {
        console.log(error);
    }
}
getRandomJoke();

function jokeInCard(value){
    box.innerHTML=`
    <div class="card border-dark mb-3" style="max-width: 18rem;">
    <div class="card-body text-dark">
    <h5 class="card-title">Random Excuse</h5>
    <p class="card-text">${value[0].excuse}</p>
    </div>
    </div>`;
}
const container=document.querySelector(".container");
const allSeats=document.querySelectorAll(".container .seat");
const notOccupiedSeats=document.querySelector(".container .seat:not(.occupied)");
const count=document.getElementById("count");
const film=document.getElementById("film");
const total=document.getElementById("total");

const movieSelectBox=document.getElementById("movie");
console.log(movieSelectBox);
// let currentTicketPrice=localStorage.getItem("selectedMoviePrice") ? localStorage.getItem("selectedMoviePrice") : movieSelectBox.options[movieSelectBox.selectedIndex].value;

let currentMovieIndex=localStorage.getItem("selectedMovieIndex") ? localStorage.getItem("selectedMovieIndex") : movieSelectBox.selectedIndex;

window.onload=()=>{
    
    movieSelectBox.selectedIndex=currentMovieIndex;
    displayUI();
    updateMovieInfo();
}
movieSelectBox.addEventListener("change",(e)=>{
    let ticketPrice=e.target.value;
    console.log(e.target);
    let movieIndex=e.target.selectedIndex;
    console.log(movieIndex);
    updateMovieInfo();
    setMovieDataLocalStorage(ticketPrice,movieIndex);
})
const  setMovieDataLocalStorage =(ticketPrice,movieIndex)=>{
    localStorage.setItem("selectedMovieIndex",movieIndex);
    localStorage.setItem("selectedMoviePrice",ticketPrice)
}
container.addEventListener("click",(e)=>{
    console.log(e.target);
if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
    e.target.classList.toggle("selected");
updateMovieInfo()
}
})


const updateMovieInfo=()=>{
    let selectedSeats=document.querySelectorAll(".row .seat.selected");
    let selectedSeatsIndexArray=[...selectedSeats].map(seat=> [...allSeats].indexOf(seat));
    localStorage.setItem("selectedSeats",JSON.stringify(selectedSeatsIndexArray));
    count.innerText=selectedSeatsIndexArray.length;
    total.innerText=selectedSeatsIndexArray.length*movieSelectBox.value;
    film.innerText=movieSelectBox.options[movieSelectBox.selectedIndex].innerText.split("(")[0];


}
const displayUI=()=>{
    let selectedSeatsFromStorage=JSON.parse(localStorage.getItem("selectedSeats"));
    console.log(selectedSeatsFromStorage);
    if(selectedSeatsFromStorage !== null && selectedSeatsFromStorage.length>0){
allSeats.forEach((seat,index) =>{
            if(selectedSeatsFromStorage.indexOf(index)>-1){
                seat.classList.add("selected");

            }
        })
    }
}
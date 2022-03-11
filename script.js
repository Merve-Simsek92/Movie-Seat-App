const container = document.querySelector(".container");
const allSeats=document.querySelectorAll(".container .seat");
const notOccupiedsSeats=document.querySelector(".container .seat:not(.occupied)");
const count=document.getElementById("count");
const film=document.getElementById("film");
const total=document.getElementById("total");
const movieSelectBox=document.getElementById("movie");

let currentTicketPrice=localStorage.getItem("selectedMoviePrice") ? localStorage.getItem("selectedMoviePrice") : movieSelectBox.value;

//movieIndex
let currentMovieındex=localStorage.getItem("selectedMovieIndex") ? localStorage.getItem("selectedMovieIndex") : movieSelectBox.selectedIndex;




movieSelectBox.addEventListener("change",(e)=>{
    let ticketPrice=e.target.value;
    let movieIndex=e.target.selectedIndex;
    console.log(movieIndex);
    setMovieDataToLocalStroge(ticketPrice,movieIndex);
})
const  setMovieDataToLocalStroge=(movieIndex,ticketPrice)=>{
    localStorage.setItem("selectedMovieIndex",movieIndex);
    localStorage.setItem("selectedMoviePrice",ticketPrice);
}

container.addEventListener("click",(e)=>{
  console.log(e.target);
  if(e.target.classList.contains("seat") && !e.target.classList.contains("occupied")){
      e.target.classList.toggle("selected")
  }
  updateMovieInfo();
});
const updateMovieInfo=()=>{
    let selectedSeats=document.querySelectorAll(".row .seat.selected");
    let selectedSeatsIndexArray=[...selectedSeats].map(seat=> [...allSeats].indexOf(seat));
    console.log(selectedSeatsIndexArray);
    localStorage.setItem("selectedSeats",JSON.stringify(selectedSeatsIndexArray))

    count.innerText=selectedSeatsIndexArray.length;
    total.innerText=selectedSeatsIndexArray.length * currentTicketPrice;
    

}
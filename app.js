const cards = document.querySelectorAll(".projects");
const upArrow = document.querySelectorAll("#up");
const removeActiveClass = ()=>{
    for(let card of cards){
        card.classList.remove("active");
    }
}
cards.forEach(card =>{
    card.addEventListener("click", function(){
        removeActiveClass();
        card.classList.add('active');
    })
})
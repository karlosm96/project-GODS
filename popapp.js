//Pop news images
const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".news-content img");
const originalImages = document.querySelector(".full-modal-img");
const caption = document.querySelector(".caption");

//Open modal screen *popup*
previews.forEach((preview) =>{
    preview.addEventListener("click", () =>{
        modal.classList.add("open");
        originalImages.classList.add("open");

        //Change images and descriptions
        const originalSrc = preview.getAttribute('data-original');
        console.log(originalSrc);
        originalImages.src = `img/${originalSrc}`;
        
        const altText = preview.alt;
        caption.textContent = altText;
    })
});

// Close popup event
modal.addEventListener("click", (e)=>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove("open");
        originalImages.classList.remove("open");
    }
})
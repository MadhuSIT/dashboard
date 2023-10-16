const slideBtn = document.getElementById('slideId')
const mainContainer = document.getElementById('mainId')
const headerId = document.getElementById('headerId')
const innerId = document.getElementById('detailsInner')


slideBtn.addEventListener("click", function(){
    headerId.classList.toggle('after-click')
    mainContainer.classList.toggle('after-click')
    mainContainer.classList.toggle('after-main-click');
    innerId.classList.toggle('details-inner-container');
})

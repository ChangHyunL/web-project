let page = 1;
// let lastPage = document.getElementsByClassName("content").length;
let lastPage = 4;

window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
window.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    if (page == 4) return;
    page++;
  } else if (e.deltaY < 0) {
    if (page == 1) return;
    page--;
  } 
  let posTop = (page - 1) * window.innerHeight;
  console.log(posTop);
  window.scrollTo({ top: posTop, left: 0, behavior: 'smooth' });
});

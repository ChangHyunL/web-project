let page = 1;
let lastPage = 4;

const pg = document.getElementsByClassName("page");
window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
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
  window.scrollTo({ top: posTop, left: 0, behavior: "smooth" });
});

function movePage(e) {
  console.log(e.path[0].id);
  if (e.path[0].id == 'profile') {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  if (e.path[0].id == "career") {
    window.scrollTo({ top: window.innerHeight, left: 0, behavior: "smooth" });
  }
  if (e.path[0].id == "capability") {
    window.scrollTo({ top: window.innerHeight*2, left: 0, behavior: "smooth" });
  }
  if (e.path[0].id == "personal") {
    window.scrollTo({ top: window.innerHeight*3, left: 0, behavior: "smooth" });
  }
}
for (i = 0; i < lastPage; i++) {
  pg[i].addEventListener("click", movePage);
}

// let page = 1;
// let lastPage = 4;
// const pages = document.getElementsByClassName("content");

// const scrollSleep = async () =>
//   await new Promise((resolve) => setTimeout(() => resolve(), 1));

// const smoothSpeed = 10;
// const smoothScrollEffect = async (targetY, cnt) => {
//   for (let i = 0; i <= Math.abs(targetY) / smoothSpeed; i++) {
//     await scrollSleep();
//     console.log(i);
//     window.scrollBy({
//       top: cnt * smoothSpeed,
//     });
//   }
// };

// window.addEventListener("wheel", (e) => {
//   if (e.deltaY > 0) {
//     if (page == pages.length) return;
//     page++;
//   } else if (e.deltaY < 0) {
//     if (page == 1) return;
//     page--;
//   }
//   const targetPageRect = pages[page - 1].getBoundingClientRect();
//   const targetPageYPos = targetPageRect.y;
//   console.log({ targetPageYPos });
//   smoothScrollEffect(targetPageYPos, targetPageYPos > 0 ? 1 : -1);
// });

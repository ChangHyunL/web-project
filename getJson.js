async function getJson(e) {
  const res = await fetch("./data.json");
  const data = await res.json();
  let favoriteValue = "";
  const btnText = e.target.innerText; // 클릭 이벤트 대상의 정보들을 가져올 수 있습니다.
  console.log({ data });
  switch (btnText) {
    case "좋아하는 거":
      favoriteValue = data.like;
      img.src = '.assets/dku.jpg';
      break;
    case "좋아하는 음식":
      favoriteValue = data.food;
      break;
    case "취미":
      favoriteValue = data.hobby;
      break;
    case "좋아하는 말":
      favoriteValue = data.word;
      break;
    case "하고싶은 말":
      favoriteValue = data.wish;
      break;
    default:
      return;
  }
  result.innerHTML = favoriteValue;
};

const result = document.querySelector("#result");
const btn = document.getElementsByClassName("button");
const img = document.querySelector("#image");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", getJson);
}
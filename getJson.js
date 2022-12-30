async function getJson() {
  const res = await fetch('./data.json');
  const data = await res.json();
  let jsonData = "";

  if (btn[0].innerHTML == "좋아하는 거") jsonData = data.like;
  if (btn[1].innerHTML == "좋아하는 음식") jsonData = data.food;
  if (btn[2].innerHTML == "취미") jsonData = data.hobby;
  if (btn[3].innerHTML == "좋아하는 말") jsonData = data.word;
  if (btn[4].innerHTML == "하고싶은 말") jsonData = data.wish;

  result.innerHTML = jsonData;
  console.log(result.innerHTML);
}

const result = document.querySelector("#result");
const btn = document.getElementsByClassName("button");
btn.addEventListener('click', getJson);
for (let i =0; i<btn.length;i++) {
  console.log(btn[i].innerHTML)
}
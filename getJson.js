async function getJson() {
  const res = await fetch("./data.json");
  const data = await res.json();
  let jsonData ='';
  console.log(btn);
  for (let i = 0; i < btn.length; i++) {
    if (btn[i].innerHTML == "좋아하는 거") jsonData = data.like;
    else if (btn[i].innerHTML == "좋아하는 음식") jsonData = data.food;
    else if (btn[i].innerHTML == "취미") jsonData = data.hobby;
    else if (btn[i].innerHTML == "좋아하는 말") jsonData = data.word;
    else if (btn[i].innerHTML == "하고싶은 말") jsonData = data.wish;
    console.log(jsonData);
  }
  result.innerHTML = jsonData;
  console.log(result.innerHTML);
}

const result = document.querySelector("#result");
const btn = document.getElementsByClassName("button");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", getJson);
}

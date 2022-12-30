async function getJson() {
  const res = await fetch(data.json);
  const data = await res.json();
  let jsonData = "";

  if (button.innerHTML == "좋아하는 음식") jsonData += data.food;
  if (button.innerHTML == "좋아하는 거") jsonData += data.like;
  if (button.innerHTML == "취미") jsonData += data.hobby;
  if (button.innerHTML == "하고싶은 말") jsonData += data.wish;
  if (button.innerHTML == "좋아하는 말") jsonData += data.word;
  console.log(jsonData);
  result.innerHTML = jsonData;
}

const result = document.querySelector("#result");
const button = document.querySelector("#button");
button.addEventListener("click", getJson);

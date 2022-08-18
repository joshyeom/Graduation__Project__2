let now = new Date();
const date = document.querySelector("#date");
date.innerText = `${moment(now).format(`dddd, Do MM YYYY`)}`;

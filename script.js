const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");
const inpu = parseInt(prompt());
const setTimeout(function(){
	async function showMessage() {
  const message = text.value;
  const delayVal = delay.value;
  await new Promise((resolve) => setTimeout(resolve, delayVal));
  output.innerText = message;
}
},inpu)


btn.addEventListener("click", showMessage);

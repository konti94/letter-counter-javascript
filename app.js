let counter = 0;
const input = document.querySelector("#textBox");
const result = document.querySelector("#countResult");
const arrowKeyCodes = [37, 38, 39, 40];

result.innerHTML = counter;

input.addEventListener("keydown", (e) => {
	if (e.keyCode === 8) {
		counter > 0 ? (counter -= 1) : (counter = 0);
	} else if (!arrowKeyCodes.includes(e.keyCode)) {
		counter = input.value.length;
		counter += 1;
	}

	result.innerHTML = counter;
});

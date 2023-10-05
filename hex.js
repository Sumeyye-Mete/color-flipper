const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const generateCode = (arr) => {
	let codes = "";
	for (let i = 0; i < 6; i++) {
		const index = Math.floor(Math.random() * arr.length);
		codes += arr[index];
	}
	return codes;
};

document.querySelector(".btn").addEventListener("click", () => {
	const hexCode = ` #${generateCode(hex)} `;
	console.log(hexCode);
	document.getElementById("main").style.backgroundColor = hexCode;
	document.querySelector(".color").innerText = hexCode;
});

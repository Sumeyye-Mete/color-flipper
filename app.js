const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const pickRandomColor = (arr) => {
	const index = Math.floor(Math.random() * arr.length);
	return colors[index];
};

document.querySelector(".btn").addEventListener("click", () => {
	const color = pickRandomColor(colors);
	document.getElementById("main").style.backgroundColor = color;
	document.querySelector(".color").innerText = color;
});

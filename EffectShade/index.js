// $(document).ready()
// document.addEventListener("DOMContentLoaded", function () {

window.addEventListener('load', (event) => {
	let effectBox = document.getElementById("effectBox")

	let box = document.getElementById("box")
	box.classList.add('effect1');

	let animationOrder = 0
	box.addEventListener("animationend", () => {
		animationOrder++
		switch (animationOrder) {
			case 1:
				box.classList.remove("effect1")
				box.classList.add('effect2');
				break
			case 2:
				box.classList.remove("effec2")
				effectBox.style.display = "none"
		}
	})

})

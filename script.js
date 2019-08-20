let button = document.getElementsByTagName("button")[0];
let modalWindow = document.getElementById("modal-window");
let crossHide = document.getElementById("cross");
let mainBlock = document.getElementsByClassName("main")[0];


document.body.addEventListener("click", function(event){
		console.log(event.target.tagName)
		if(event.target.tagName === "BUTTON") {
			modalWindow.classList.remove("hidden");
			mainBlock.classList.add("dark");
			button.classList.add("hiddenButton");
		}
		if(event.target.id === "cross") {
			modalWindow.classList.add("hidden");
			mainBlock.classList.remove("dark");
			button.classList.remove("hiddenButton")
		}
	
})
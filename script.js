//your code here
const idArray = ["img1", "img2", 'img3', "img4", "img5"]

const random = Math.floor(Math.random()*5)
const random2 = Math.floor(Math.random()*5)
idArray.splice(random, 0, idArray[random2])
	
const container = document.getElementById("img-container")
idArray.forEach(cl => {
	const img = document.createElement("img")
	img.className = cl
	container.appendChild(img)
	img.addEventListener("click", function(){
	img.classList.toggle("selected")
	checkSelectedImages()
	})
})
// const verify = document.getElementById("verify")

function checkSelectedImages(){
	const selectedImgs = document.querySelectorAll(".selected")
	if(selectedImgs.length===2 && !document.getElementById("verify")){
		const verify = document.createElement("button")
		verify.id = "verify"
		verify.textContent = "Verify"
		document.getElementById("btns").appendChild(verify)

		verify.addEventListener("click", function(){
	const selectedImgs =  document.querySelectorAll(".selected")
	const class1 = selectedImgs[0].className
	const class2 = selectedImgs[1].className

	if(class1===class2){
		document.getElementsByTagName("p")[0].textContent = "You are a human. Congratulations!"
		verify.remove()
	} else {
		document.getElementsByTagName("p")[0].textContent = "We can't verify you as a human. You selected the non-identical tiles."
		verify.remove()
	}
})
	} else{
		document.getElementById("verify").remove()
	}
}

const resetBtn = document.getElementById("reset")
resetBtn.addEventListener("click", function(){
	const selectedImgs = document.querySelectorAll(".selected")
	selectedImgs.forEach(img => {
		img.classList.remove("selected")
	})
	
	const pElement = document.getElementsByTagName("p")[0]; 
	pElement.textContent = ""; 

	const verifyButton = document.getElementById("verify");
  if (verifyButton) {
    verifyButton.remove();
  }
})

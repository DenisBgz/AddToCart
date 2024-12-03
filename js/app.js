let imageArray = document.getElementsByClassName('icon-img');
let imageBoxArray = document.getElementsByClassName('image-box');
const titleImage = document.getElementById('title-img')

for(let i = 0;i<imageArray.length;i++){
	imageBoxArray[i].onclick = ()=>{
		for(let j = 0;j < imageArray.length;j++)
			imageBoxArray[j].style.border = "none";
		
		titleImage.src = imageArray[i].src;
		imageBoxArray[i].style.border = "0.25vh solid rgb(67, 201, 172)";
	}

}

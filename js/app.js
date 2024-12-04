function addElement(symbol,type,cls){
	let buttonSection = document.getElementById('buttonContainer')
	let plusButton = document.createElement(type);
	plusButton.className = cls;
	plusButton.innerHTML = symbol;
	buttonSection.appendChild(plusButton);
}
function removeElement(id){
	let element = document.getElementsByClassName(id);
	element[0].parentNode.removeChild(element[0]);
}
let imageArray = document.getElementsByClassName('icon-img');
let imageBoxArray = document.getElementsByClassName('image-box');
let addToBagButton = document.getElementById('AddToCart');
let optionsArr = document.getElementsByClassName('option');
const titleImage = document.getElementById('title-img');
let added = false;
imageBoxArray[0].style.border = "0.25vh solid rgb(67, 201, 172)";
optionsArr[0].style.border = "0.25vh solid rgb(67, 201, 172)";
for(let i = 0;i<imageArray.length;i++){
	imageBoxArray[i].onclick = ()=>{
		for(let j = 0;j < imageArray.length;j++)
			imageBoxArray[j].style.border = "none";
		
		titleImage.src = imageArray[i].src;
		imageBoxArray[i].style.border = "0.25vh solid rgb(67, 201, 172)";
	}
}
addToBagButton.onclick = ()=>{
	let quantity = 1;
	if(!added){
		addToBagButton.style.width = "55%";
		addToBagButton.textContent = "Добавлено в корзину";
		addToBagButton.style.backgroundColor = "rgb(184, 255, 237)";
		addToBagButton.style.color = "rgb(67, 201, 172)";
		addElement('-','button','minus-button');
		addElement('1','p','quantity');
		addElement('+','button','plus-button');
		document.querySelector('.plus-button').onclick=()=>{
			quantity++;
			document.querySelector('.quantity').textContent = quantity;
		}
		document.querySelector('.minus-button').onclick=()=>{
			if(quantity > 1)
				quantity--;
			document.querySelector('.quantity').textContent = quantity;
		}
		added = true;
	}else{
		addToBagButton.classList.add('add-to-cart');
		removeElement('plus-button');
		removeElement('minus-button');
		removeElement('quantity');
		addToBagButton.style.width = "100%";
		addToBagButton.style.color = "white";
		addToBagButton.style.backgroundColor = "rgb(67, 201, 172)";
		addToBagButton.textContent = "Добавить в корзину";
		added = false;
	}
}
for(let i = 0; i < optionsArr.length;i++){
	optionsArr[i].onclick = () =>{
		for(let j = 0;j < optionsArr.length;j++)
			optionsArr[j].style.border = "none";

		optionsArr[i].style.border = "0.25vh solid rgb(67, 201, 172)";
	}
}
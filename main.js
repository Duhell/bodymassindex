//declares variables
const heightInput = document.getElementById('inputHeight')
const weightInput = document.getElementById('inputWeight')
const btn = document.getElementById('btn')
const result = document.getElementById('result')
const resultClassification = document.getElementById('resultClassification')

//events
btn.addEventListener('click', e =>{
	e.preventDefault()
	const answer = parseFloat(weightInput.value)/(parseFloat(heightInput.value)*parseFloat(heightInput.value))
	
	//Conditions
	isNaN(answer) ? alert("Enter Correct Input") : result.textContent = answer.toFixed(2) + "  kg/m²"
	if (answer < 18.5) resultClassification.textContent = `Under Weight`
	if (answer >= 18.5 && answer < 24.9) resultClassification.textContent = `Normal`
	if (answer >= 25 && answer < 29.9) resultClassification.textContent = `Over Weight`
	if (answer >= 30 && answer < 34.9) resultClassification.textContent = `Obesity I`
	if (answer >= 35 && answer < 39.9) resultClassification.textContent = `Obesity II`
	if (answer >= 40) resultClassification.textContent = `Obesity III`
})


